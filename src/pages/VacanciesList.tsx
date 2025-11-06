import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Filter, SlidersHorizontal, BookOpen, Users, Clock } from "lucide-react";
import { Layout } from "@/components/Layout";
import { VacancyCard } from "@/components/VacancyCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/pau-hero.jpg";
import { vacancies } from "@/data/vacancies";
import { departments, modalities } from "@/data/mockData";
import { toast } from "sonner";

export const VacanciesList = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedModality, setSelectedModality] = useState("");

  const handleVacancyClick = (id: string) => {
    navigate(`/vacante/${id}`);
  };

  // Filtrar vacantes con useMemo para optimizar
  const filteredVacancies = useMemo(() => {
    return vacancies.filter(vacancy => {
      const matchesSearch = vacancy.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           vacancy.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           vacancy.professor.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDepartment = !selectedDepartment || selectedDepartment === "all" || vacancy.department === selectedDepartment;
      const matchesModality = !selectedModality || selectedModality === "all" || vacancy.modality === selectedModality;
      
      return matchesSearch && matchesDepartment && matchesModality;
    });
  }, [searchTerm, selectedDepartment, selectedModality]);

  // Calcular estadísticas dinámicamente
  const totalPositions = useMemo(() => {
    return filteredVacancies.reduce((acc, v) => acc + v.positions, 0);
  }, [filteredVacancies]);

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="bg-gradient-primary rounded-lg overflow-hidden relative">
          <div className="absolute inset-0 opacity-20">
            <img src={heroImage} alt="Universidad" className="w-full h-full object-cover" />
          </div>
          <div className="relative p-6 text-primary-foreground">
            <h1 className="text-3xl font-bold mb-2">Ayudantías Disponibles</h1>
            <p className="text-primary-foreground/90">
              Encuentra la ayudantía perfecta para desarrollar tu experiencia académica
            </p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="flex items-center p-6">
              <BookOpen className="w-8 h-8 text-primary mr-4" />
              <div>
                <p className="text-2xl font-bold text-foreground">{vacancies.length}</p>
                <p className="text-muted-foreground">Vacantes Activas</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center p-6">
              <Users className="w-8 h-8 text-success mr-4" />
              <div>
                <p className="text-2xl font-bold text-foreground">{totalPositions}</p>
                <p className="text-muted-foreground">Posiciones Disponibles</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center p-6">
              <Clock className="w-8 h-8 text-warning mr-4" />
              <div>
                <p className="text-2xl font-bold text-foreground">{departments.length}</p>
                <p className="text-muted-foreground">Departamentos</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="w-5 h-5" />
              Filtros de Búsqueda
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Buscar asignatura, código o profesor..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9"
                />
              </div>
              
              <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                <SelectTrigger>
                  <SelectValue placeholder="Departamento" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos los departamentos</SelectItem>
                  {departments.map(dept => (
                    <SelectItem key={dept} value={dept}>{dept}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedModality} onValueChange={setSelectedModality}>
                <SelectTrigger>
                  <SelectValue placeholder="Modalidad" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas las modalidades</SelectItem>
                  {modalities.map(mod => (
                    <SelectItem key={mod} value={mod}>
                      {mod.charAt(0).toUpperCase() + mod.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button 
                variant="outline" 
                className="gap-2"
                onClick={() => toast.info("Próximamente", {
                  description: "Filtros avanzados en desarrollo"
                })}
              >
                <SlidersHorizontal className="w-4 h-4" />
                Más Filtros
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <div className="flex items-center justify-between">
          <p className="text-muted-foreground">
            {filteredVacancies.length} vacante{filteredVacancies.length !== 1 ? 's' : ''} encontrada{filteredVacancies.length !== 1 ? 's' : ''}
          </p>
          <Select defaultValue="deadline">
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Ordenar por" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="deadline">Fecha límite</SelectItem>
              <SelectItem value="positions">Más vacantes</SelectItem>
              <SelectItem value="department">Departamento</SelectItem>
              <SelectItem value="subject">Asignatura</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Vacancy Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredVacancies.map((vacancy) => (
            <VacancyCard
              key={vacancy.id}
              {...vacancy}
              onClick={handleVacancyClick}
            />
          ))}
        </div>

        {filteredVacancies.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">
              No se encontraron vacantes
            </h3>
            <p className="text-muted-foreground">
              Intenta ajustar los filtros de búsqueda para encontrar más resultados.
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};
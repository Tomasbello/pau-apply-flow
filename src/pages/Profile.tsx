import { useState } from "react";
import { User, GraduationCap, Save } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useUser } from "@/context/UserContext";
import { careers, semesters } from "@/data/mockData";
import { toast } from "sonner";

export const Profile = () => {
  const { user, updateProfile } = useUser();
  const [formData, setFormData] = useState(user);
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    
    // Simular guardado
    setTimeout(() => {
      updateProfile(formData);
      toast.success("Perfil actualizado", {
        description: "Tus cambios han sido guardados exitosamente."
      });
      setIsSaving(false);
    }, 500);
  };

  const hasChanges = JSON.stringify(formData) !== JSON.stringify(user);

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="bg-gradient-primary rounded-lg p-6 text-primary-foreground">
          <h1 className="text-3xl font-bold mb-2">Mi Perfil</h1>
          <p className="text-primary-foreground/90">
            Actualiza tu información personal y académica
          </p>
        </div>

        {/* Datos Personales */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="w-5 h-5" />
              Datos Personales
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">Nombre *</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  placeholder="Tu nombre"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Apellido *</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  placeholder="Tu apellido"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Institucional *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="tu.email@estudiante.universidad.cl"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Teléfono *</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+56 9 1234 5678"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="studentId">RUT o ID Estudiante *</Label>
                <Input
                  id="studentId"
                  value={formData.studentId}
                  onChange={(e) => setFormData({ ...formData, studentId: e.target.value })}
                  placeholder="12.345.678-9"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Información Académica */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GraduationCap className="w-5 h-5" />
              Información Académica
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="career">Carrera *</Label>
                <Select 
                  value={formData.career} 
                  onValueChange={(value) => setFormData({ ...formData, career: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona tu carrera" />
                  </SelectTrigger>
                  <SelectContent>
                    {careers.map(career => (
                      <SelectItem key={career.value} value={career.value}>
                        {career.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="semester">Semestre Actual *</Label>
                <Select 
                  value={formData.semester} 
                  onValueChange={(value) => setFormData({ ...formData, semester: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona semestre" />
                  </SelectTrigger>
                  <SelectContent>
                    {semesters.map(semester => (
                      <SelectItem key={semester.value} value={semester.value}>
                        {semester.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="gpa">Promedio General (PGA) *</Label>
              <Input
                id="gpa"
                type="number"
                step="0.1"
                min="1"
                max="7"
                value={formData.gpa}
                onChange={(e) => setFormData({ ...formData, gpa: e.target.value })}
                placeholder="6.5"
              />
              <p className="text-xs text-muted-foreground">
                Ingresa tu promedio general en escala de 1.0 a 7.0
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Botones de acción */}
        <div className="flex justify-end gap-2">
          <Button 
            variant="outline" 
            onClick={() => setFormData(user)}
            disabled={!hasChanges}
          >
            Cancelar
          </Button>
          <Button 
            onClick={handleSave}
            disabled={!hasChanges || isSaving}
            className="bg-gradient-primary hover:bg-primary-dark"
          >
            <Save className="w-4 h-4 mr-2" />
            {isSaving ? "Guardando..." : "Guardar Cambios"}
          </Button>
        </div>

        {/* Nota informativa */}
        <Card className="bg-muted/50">
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">
              💡 <strong>Tip:</strong> Mantén tu información actualizada. Estos datos se usarán para 
              pre-rellenar tus postulaciones a ayudantías, ahorrándote tiempo.
            </p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};


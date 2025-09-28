import { useState } from "react";
import { ArrowLeft, Calendar, Clock, Users, MapPin, BookOpen, FileText, AlertTriangle, CheckCircle } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";

export const VacancyDetail = () => {
  const [isApplying, setIsApplying] = useState(false);

  // Mock data - en una app real vendría de la API
  const vacancy = {
    id: "1",
    subject: "Cálculo Diferencial e Integral",
    code: "MAT101",
    professor: "María González",
    department: "Matemáticas",
    positions: 3,
    deadline: "15 Octubre 2024",
    deadlineTime: "23:59 hrs",
    modality: "presencial" as const,
    description: "Se buscan ayudantes para apoyar en clases prácticas, resolución de ejercicios y atención de consultas. La asignatura cubre límites, derivadas e integrales con aplicaciones en ingeniería.",
    requirements: [
      "Nota mínima 6.0 en la asignatura",
      "Conocimiento avanzado en LaTeX para preparación de material",
      "Disponibilidad horaria de tardes (14:00 - 18:00)",
      "Habilidades de comunicación y trabajo en equipo",
      "Experiencia previa en tutorías (valorable)"
    ],
    responsibilities: [
      "Preparar y dirigir clases de ejercicios semanales",
      "Atender consultas de estudiantes en horarios designados",
      "Corregir tareas y pruebas parciales",
      "Elaborar material de apoyo (guías, presentaciones)",
      "Participar en reuniones de coordinación semanales"
    ],
    benefits: [
      "Remuneración mensual de $350.000",
      "Certificación de experiencia académica",
      "Acceso a capacitaciones pedagógicas",
      "Flexibilidad para estudios de pregrado",
      "Red de contactos académicos"
    ],
    schedule: "Lunes, Miércoles y Viernes de 14:00 a 17:00 hrs",
    duration: "Semestre Primavera 2024 (Agosto - Diciembre)",
    contact: "maria.gonzalez@universidad.cl"
  };

  const handleApply = () => {
    setIsApplying(true);
    // Simular navegación al formulario
    setTimeout(() => {
      window.location.href = `/postular/${vacancy.id}`;
    }, 500);
  };

  const daysLeft = 8; // Mock calculation
  const isUrgent = daysLeft <= 3;

  return (
    <Layout>
      <div className="space-y-6">
        {/* Back Button */}
        <Button variant="ghost" onClick={() => window.history.back()} className="gap-2">
          <ArrowLeft className="w-4 h-4" />
          Volver a vacantes
        </Button>

        {/* Header */}
        <div className="bg-gradient-primary rounded-lg p-6 text-primary-foreground">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <Badge variant="outline" className="bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30">
                  {vacancy.code}
                </Badge>
                <Badge className="bg-primary-foreground text-primary">
                  {vacancy.modality}
                </Badge>
              </div>
              <h1 className="text-3xl font-bold mb-2">{vacancy.subject}</h1>
              <p className="text-primary-foreground/90 text-lg">
                Prof. {vacancy.professor} • {vacancy.department}
              </p>
            </div>
            <div className="text-right">
              <p className="text-primary-foreground/90 text-sm">Vacantes disponibles</p>
              <p className="text-3xl font-bold">{vacancy.positions}</p>
            </div>
          </div>
        </div>

        {/* Deadline Alert */}
        <Alert className={isUrgent ? "border-destructive bg-destructive/10" : "border-warning bg-warning/10"}>
          <AlertTriangle className={`w-4 h-4 ${isUrgent ? "text-destructive" : "text-warning"}`} />
          <AlertDescription className="flex items-center justify-between">
            <span>
              <strong>Plazo de postulación:</strong> {vacancy.deadline} a las {vacancy.deadlineTime}
              {isUrgent && " - ¡Solo quedan " + daysLeft + " días!"}
            </span>
            <Button 
              onClick={handleApply}
              disabled={isApplying}
              className="bg-gradient-primary hover:bg-primary-dark ml-4"
            >
              {isApplying ? "Redirigiendo..." : "Postular Ahora"}
            </Button>
          </AlertDescription>
        </Alert>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Description */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Descripción de la Ayudantía
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {vacancy.description}
                </p>
              </CardContent>
            </Card>

            {/* Requirements */}
            <Card>
              <CardHeader>
                <CardTitle>Requisitos</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {vacancy.requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Responsibilities */}
            <Card>
              <CardHeader>
                <CardTitle>Responsabilidades</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {vacancy.responsibilities.map((resp, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card>
              <CardHeader>
                <CardTitle>Beneficios</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {vacancy.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Info */}
            <Card>
              <CardHeader>
                <CardTitle>Información General</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Duración</p>
                    <p className="text-sm text-muted-foreground">{vacancy.duration}</p>
                  </div>
                </div>
                
                <Separator />
                
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Horario</p>
                    <p className="text-sm text-muted-foreground">{vacancy.schedule}</p>
                  </div>
                </div>
                
                <Separator />
                
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Modalidad</p>
                    <p className="text-sm text-muted-foreground capitalize">{vacancy.modality}</p>
                  </div>
                </div>
                
                <Separator />
                
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Contacto</p>
                    <p className="text-sm text-muted-foreground">{vacancy.contact}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Application CTA */}
            <Card className="bg-gradient-primary text-primary-foreground">
              <CardHeader>
                <CardTitle className="text-center">¿Listo para postular?</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-primary-foreground/90 text-sm">
                  El proceso de postulación toma aproximadamente 10 minutos.
                </p>
                <Button 
                  onClick={handleApply}
                  disabled={isApplying}
                  variant="secondary"
                  className="w-full"
                  size="lg"
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  {isApplying ? "Redirigiendo..." : "Iniciar Postulación"}
                </Button>
                <p className="text-xs text-primary-foreground/70">
                  Necesitarás CV, certificado de notas y carta de motivación.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};
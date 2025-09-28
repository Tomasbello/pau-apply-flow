import { useState } from "react";
import { ArrowLeft, Upload, FileText, User, Mail, Phone, GraduationCap, CheckCircle, AlertCircle } from "lucide-react";
import { Layout } from "@/components/Layout";
import { ProgressSteps } from "@/components/ProgressSteps";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";

export const ApplicationForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Info
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    studentId: "",
    career: "",
    semester: "",
    
    // Academic Info
    gpa: "",
    subjectGrade: "",
    previousExperience: "",
    motivation: "",
    
    // Documents
    cv: false,
    transcript: false,
    motivationLetter: false,
    additionalDocs: false
  });

  const steps = [
    {
      id: "personal",
      title: "Datos Personales",
      description: "Información básica",
      status: (currentStep > 1 ? "completed" : currentStep === 1 ? "current" : "pending") as "completed" | "current" | "pending" | "error"
    },
    {
      id: "academic",
      title: "Información Académica",
      description: "Historial y motivación",
      status: (currentStep > 2 ? "completed" : currentStep === 2 ? "current" : "pending") as "completed" | "current" | "pending" | "error"
    },
    {
      id: "documents",
      title: "Documentos",
      description: "Carga de archivos",
      status: (currentStep > 3 ? "completed" : currentStep === 3 ? "current" : "pending") as "completed" | "current" | "pending" | "error"
    },
    {
      id: "review",
      title: "Revisión",
      description: "Confirmar y enviar",
      status: (currentStep === 4 ? "current" : "pending") as "completed" | "current" | "pending" | "error"
    }
  ];

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    // Simular envío
    alert("Postulación enviada exitosamente!");
    window.location.href = "/seguimiento";
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.firstName && formData.lastName && formData.email && formData.phone && formData.studentId;
      case 2:
        return formData.career && formData.semester && formData.gpa && formData.subjectGrade;
      case 3:
        return formData.cv && formData.transcript;
      case 4:
        return true;
      default:
        return false;
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
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
                    placeholder="Tu nombre"
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Apellido *</Label>
                  <Input
                    id="lastName"
                    placeholder="Tu apellido"
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email Institucional *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="tu.email@estudiante.universidad.cl"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Teléfono *</Label>
                  <Input
                    id="phone"
                    placeholder="+56 9 1234 5678"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="studentId">RUT o ID Estudiante *</Label>
                  <Input
                    id="studentId"
                    placeholder="12.345.678-9"
                    value={formData.studentId}
                    onChange={(e) => setFormData({...formData, studentId: e.target.value})}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        );

      case 2:
        return (
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
                  <Select value={formData.career} onValueChange={(value) => setFormData({...formData, career: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona tu carrera" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ingenieria-civil">Ingeniería Civil</SelectItem>
                      <SelectItem value="ingenieria-informatica">Ingeniería Informática</SelectItem>
                      <SelectItem value="matematicas">Matemáticas</SelectItem>
                      <SelectItem value="fisica">Física</SelectItem>
                      <SelectItem value="quimica">Química</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="semester">Semestre Actual *</Label>
                  <Select value={formData.semester} onValueChange={(value) => setFormData({...formData, semester: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona semestre" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({length: 12}, (_, i) => (
                        <SelectItem key={i} value={`${i + 1}`}>{i + 1}° Semestre</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="gpa">Promedio General (PGA) *</Label>
                  <Input
                    id="gpa"
                    placeholder="6.5"
                    type="number"
                    step="0.1"
                    min="1"
                    max="7"
                    value={formData.gpa}
                    onChange={(e) => setFormData({...formData, gpa: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subjectGrade">Nota en MAT101 *</Label>
                  <Input
                    id="subjectGrade"
                    placeholder="6.8"
                    type="number"
                    step="0.1"
                    min="1"
                    max="7"
                    value={formData.subjectGrade}
                    onChange={(e) => setFormData({...formData, subjectGrade: e.target.value})}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="previousExperience">Experiencia Previa (opcional)</Label>
                <Textarea
                  id="previousExperience"
                  placeholder="Describe cualquier experiencia previa como ayudante, tutor o docente..."
                  value={formData.previousExperience}
                  onChange={(e) => setFormData({...formData, previousExperience: e.target.value})}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="motivation">Motivación *</Label>
                <Textarea
                  id="motivation"
                  placeholder="¿Por qué quieres ser ayudante de esta asignatura? (máximo 500 caracteres)"
                  maxLength={500}
                  value={formData.motivation}
                  onChange={(e) => setFormData({...formData, motivation: e.target.value})}
                />
                <p className="text-xs text-muted-foreground">
                  {formData.motivation.length}/500 caracteres
                </p>
              </div>
            </CardContent>
          </Card>
        );

      case 3:
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="w-5 h-5" />
                Documentos Requeridos
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <Alert>
                <AlertCircle className="w-4 h-4" />
                <AlertDescription>
                  Todos los documentos deben estar en formato PDF y no superar los 5MB cada uno.
                </AlertDescription>
              </Alert>
              
              {/* Required Documents */}
              <div className="space-y-4">
                <h4 className="font-semibold text-foreground">Documentos Obligatorios</h4>
                
                <div className="grid gap-4">
                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                    <FileText className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                    <p className="font-medium">Curriculum Vitae *</p>
                    <p className="text-sm text-muted-foreground mb-3">PDF, máximo 5MB</p>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => setFormData({...formData, cv: true})}
                    >
                      <Upload className="w-4 h-4 mr-2" />
                      Seleccionar Archivo
                    </Button>
                    {formData.cv && (
                      <Badge variant="secondary" className="mt-2">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        CV cargado
                      </Badge>
                    )}
                  </div>
                  
                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                    <FileText className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                    <p className="font-medium">Certificado de Notas *</p>
                    <p className="text-sm text-muted-foreground mb-3">PDF, máximo 5MB</p>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => setFormData({...formData, transcript: true})}
                    >
                      <Upload className="w-4 h-4 mr-2" />
                      Seleccionar Archivo
                    </Button>
                    {formData.transcript && (
                      <Badge variant="secondary" className="mt-2">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Certificado cargado
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Optional Documents */}
              <div className="space-y-4">
                <h4 className="font-semibold text-foreground">Documentos Opcionales</h4>
                
                <div className="grid gap-4">
                  <div className="border-2 border-dashed border-muted rounded-lg p-6 text-center">
                    <FileText className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                    <p className="font-medium">Carta de Motivación</p>
                    <p className="text-sm text-muted-foreground mb-3">PDF, máximo 5MB (opcional)</p>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => setFormData({...formData, motivationLetter: true})}
                    >
                      <Upload className="w-4 h-4 mr-2" />
                      Seleccionar Archivo
                    </Button>
                  </div>
                  
                  <div className="border-2 border-dashed border-muted rounded-lg p-6 text-center">
                    <FileText className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                    <p className="font-medium">Documentos Adicionales</p>
                    <p className="text-sm text-muted-foreground mb-3">Certificados, cartas de recomendación, etc.</p>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => setFormData({...formData, additionalDocs: true})}
                    >
                      <Upload className="w-4 h-4 mr-2" />
                      Seleccionar Archivo
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        );

      case 4:
        return (
          <Card>
            <CardHeader>
              <CardTitle>Revisión Final</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <Alert>
                <CheckCircle className="w-4 h-4" />
                <AlertDescription>
                  Revisa toda la información antes de enviar tu postulación. No podrás modificarla después.
                </AlertDescription>
              </Alert>
              
              {/* Summary sections would go here */}
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Datos Personales</h4>
                  <p className="text-sm text-muted-foreground">
                    {formData.firstName} {formData.lastName} • {formData.email}
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Información Académica</h4>
                  <p className="text-sm text-muted-foreground">
                    {formData.career} • Semestre {formData.semester} • PGA: {formData.gpa}
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Documentos</h4>
                  <div className="flex gap-2">
                    <Badge variant="secondary">CV</Badge>
                    <Badge variant="secondary">Certificado de Notas</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        );
    }
  };

  return (
    <Layout>
      <div className="space-y-6">
        {/* Back Button */}
        <Button variant="ghost" onClick={() => window.history.back()} className="gap-2">
          <ArrowLeft className="w-4 h-4" />
          Volver a la vacante
        </Button>

        {/* Header */}
        <div className="bg-gradient-primary rounded-lg p-6 text-primary-foreground">
          <h1 className="text-3xl font-bold mb-2">Postulación a Ayudantía</h1>
          <p className="text-primary-foreground/90">
            Cálculo Diferencial e Integral (MAT101) • Prof. María González
          </p>
        </div>

        {/* Progress Steps */}
        <ProgressSteps steps={steps} currentStep={`step-${currentStep}`} />

        {/* Form Content */}
        {renderStepContent()}

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <Button 
            variant="outline" 
            onClick={handleBack} 
            disabled={currentStep === 1}
          >
            Anterior
          </Button>
          
          {currentStep < 4 ? (
            <Button 
              onClick={handleNext} 
              disabled={!isStepValid()}
              className="bg-gradient-primary hover:bg-primary-dark"
            >
              Siguiente
            </Button>
          ) : (
            <Button 
              onClick={handleSubmit}
              className="bg-gradient-success hover:bg-success"
            >
              <CheckCircle className="w-4 h-4 mr-2" />
              Enviar Postulación
            </Button>
          )}
        </div>
      </div>
    </Layout>
  );
};
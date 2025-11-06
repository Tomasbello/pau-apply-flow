import { useState } from "react";
import { FileText, CheckCircle, Clock, AlertTriangle, User, Mail, Download, Eye, Upload, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { ApplicationDetailModal } from "@/components/ApplicationDetailModal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useApplications } from "@/context/ApplicationContext";
import { Application, ApplicationStatus } from "@/data/types";
import { formatDate } from "@/data/mockData";
import { toast } from "sonner";

export const ApplicationTracking = () => {
  const navigate = useNavigate();
  const { applications } = useApplications();
  const [selectedApplication, setSelectedApplication] = useState<Application | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewApplication = (application: Application) => {
    setSelectedApplication(application);
    setIsModalOpen(true);
  };

  const handleContactProfessor = (professorName: string) => {
    const email = professorName.toLowerCase().replace(/\s+/g, '.') + "@universidad.cl";
    toast.info(`Contactar al profesor`, {
      description: `Email: ${email}`
    });
  };

  const handleUploadDocument = () => {
    toast.info("Próximamente", {
      description: "Subir documentos adicionales en desarrollo"
    });
  };

  const handleDownloadLetter = () => {
    toast.success("Descargando carta...", {
      description: "La carta de aceptación se descargará en breve"
    });
  };

  const handleContactCoordinator = () => {
    toast.info("Contactar al coordinador", {
      description: "Email: coordinador.ayudantias@universidad.cl"
    });
  };

  const getStatusInfo = (status: ApplicationStatus) => {
    switch (status) {
      case "pending_review":
        return {
          label: "En Revisión",
          color: "bg-warning text-warning-foreground",
          icon: Clock
        };
      case "accepted":
        return {
          label: "Aceptada",
          color: "bg-success text-success-foreground",
          icon: CheckCircle
        };
      case "rejected":
        return {
          label: "Rechazada",
          color: "bg-destructive text-destructive-foreground",
          icon: AlertTriangle
        };
      case "interview":
        return {
          label: "Entrevista Programada",
          color: "bg-primary text-primary-foreground",
          icon: User
        };
    }
  };

  // Filtrar postulaciones por estado
  const activeApplications = applications.filter(app => 
    app.status === "pending_review" || app.status === "interview"
  );
  
  const completedApplications = applications.filter(app => 
    app.status === "accepted" || app.status === "rejected"
  );

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="bg-gradient-primary rounded-lg p-6 text-primary-foreground">
          <h1 className="text-3xl font-bold mb-2">Seguimiento de Postulaciones</h1>
          <p className="text-primary-foreground/90">
            Monitorea el estado de tus postulaciones a ayudantías
          </p>
        </div>

        <Tabs defaultValue="active" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="active">Activas ({activeApplications.length})</TabsTrigger>
            <TabsTrigger value="completed">Completadas ({completedApplications.length})</TabsTrigger>
            <TabsTrigger value="documents">Documentos</TabsTrigger>
          </TabsList>

          <TabsContent value="active" className="space-y-6">
            {activeApplications.length === 0 ? (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-12">
                  <BookOpen className="w-16 h-16 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No tienes postulaciones activas</h3>
                  <p className="text-muted-foreground text-center mb-4">
                    Explora las vacantes disponibles y postula a las que te interesen
                  </p>
                  <Button onClick={() => navigate("/")}>
                    Ver Vacantes
                  </Button>
                </CardContent>
              </Card>
            ) : (
              activeApplications.map((application) => {
                const statusInfo = getStatusInfo(application.status);
                const StatusIcon = statusInfo.icon;
                
                return (
                  <Card key={application.id} className="shadow-card">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <Badge variant="outline">{application.vacancy.code}</Badge>
                            <Badge className={statusInfo.color}>
                              <StatusIcon className="w-3 h-3 mr-1" />
                              {statusInfo.label}
                            </Badge>
                          </div>
                          <CardTitle className="mb-1">{application.vacancy.subject}</CardTitle>
                          <p className="text-muted-foreground">Prof. {application.vacancy.professor}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-muted-foreground">Progreso</p>
                          <p className="text-2xl font-bold text-primary">{application.progress}%</p>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <Progress value={application.progress} className="w-full" />
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">Enviado:</p>
                          <p className="font-medium">{formatDate(application.submittedDate)}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Fecha límite:</p>
                          <p className="font-medium">{formatDate(application.deadline)}</p>
                        </div>
                      </div>

                      {application.missingDocuments.length > 0 && (
                        <Alert className="border-warning bg-warning/10">
                          <AlertTriangle className="w-4 h-4 text-warning" />
                          <AlertDescription>
                            <strong>Documentos faltantes:</strong> {application.missingDocuments.join(", ")}
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="ml-2"
                              onClick={handleUploadDocument}
                            >
                              <Upload className="w-3 h-3 mr-1" />
                              Subir
                            </Button>
                          </AlertDescription>
                        </Alert>
                      )}

                      {/* Timeline */}
                      <div className="space-y-3">
                        <h4 className="font-semibold">Estado del Proceso</h4>
                        <div className="space-y-2">
                          {application.timeline.map((item, index) => (
                            <div key={index} className="flex items-center gap-3">
                              <div className={`w-3 h-3 rounded-full ${
                                item.status === "completed" ? "bg-success" :
                                item.status === "current" ? "bg-primary" :
                                "bg-muted"
                              }`} />
                              <div className="flex-1 flex items-center justify-between">
                                <span className={`text-sm ${
                                  item.status === "current" ? "font-medium text-primary" : 
                                  item.status === "completed" ? "text-foreground" :
                                  "text-muted-foreground"
                                }`}>
                                  {item.event}
                                </span>
                                {item.date && (
                                  <span className="text-xs text-muted-foreground">
                                    {formatDate(item.date)}
                                  </span>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-2 pt-4">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleViewApplication(application)}
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          Ver Postulación
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleContactProfessor(application.vacancy.professor)}
                        >
                          <Mail className="w-4 h-4 mr-2" />
                          Contactar Profesor
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })
            )}
          </TabsContent>

          <TabsContent value="completed" className="space-y-6">
            {completedApplications.length === 0 ? (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-12">
                  <CheckCircle className="w-16 h-16 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No tienes postulaciones completadas</h3>
                  <p className="text-muted-foreground text-center">
                    Aquí aparecerán tus postulaciones una vez sean procesadas
                  </p>
                </CardContent>
              </Card>
            ) : (
              completedApplications.map((application) => {
                const statusInfo = getStatusInfo(application.status);
                const StatusIcon = statusInfo.icon;
                
                return (
                  <Card key={application.id} className="shadow-card">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <Badge variant="outline">{application.vacancy.code}</Badge>
                            <Badge className={statusInfo.color}>
                              <StatusIcon className="w-3 h-3 mr-1" />
                              {statusInfo.label}
                            </Badge>
                          </div>
                          <CardTitle className="mb-1">{application.vacancy.subject}</CardTitle>
                          <p className="text-muted-foreground">Prof. {application.vacancy.professor}</p>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <Alert className="border-success bg-success/10">
                        <CheckCircle className="w-4 h-4 text-success" />
                        <AlertDescription>
                          ¡Felicidades! Tu postulación ha sido aceptada. Revisa tu email para instrucciones sobre el inicio de actividades.
                        </AlertDescription>
                      </Alert>
                      
                      <div className="flex gap-2 mt-4">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={handleDownloadLetter}
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Descargar Carta de Aceptación
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={handleContactCoordinator}
                        >
                          <Mail className="w-4 h-4 mr-2" />
                          Contactar Coordinador
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })
            )}
          </TabsContent>

          <TabsContent value="documents" className="space-y-6">
            {applications.length === 0 ? (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-12">
                  <FileText className="w-16 h-16 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No hay documentos</h3>
                  <p className="text-muted-foreground text-center">
                    Los documentos de tus postulaciones aparecerán aquí
                  </p>
                </CardContent>
              </Card>
            ) : (
              applications.map((application) => (
                <Card key={application.id}>
                  <CardHeader>
                    <CardTitle className="text-lg">
                      {application.vacancy.subject} ({application.vacancy.code})
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* CV */}
                      <div className="flex items-center justify-between py-3">
                        <div className="flex items-center gap-3">
                          <FileText className="w-5 h-5 text-muted-foreground" />
                          <div>
                            <p className="font-medium">Curriculum Vitae</p>
                            <p className="text-xs text-muted-foreground">
                              Subido el {formatDate(application.submittedDate)}
                            </p>
                          </div>
                        </div>
                        <Badge variant="secondary" className="bg-success/10 text-success">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Subido
                        </Badge>
                      </div>
                      <Separator />
                      
                      {/* Certificado de Notas */}
                      <div className="flex items-center justify-between py-3">
                        <div className="flex items-center gap-3">
                          <FileText className="w-5 h-5 text-muted-foreground" />
                          <div>
                            <p className="font-medium">Certificado de Notas</p>
                            <p className="text-xs text-muted-foreground">
                              Subido el {formatDate(application.submittedDate)}
                            </p>
                          </div>
                        </div>
                        <Badge variant="secondary" className="bg-success/10 text-success">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Subido
                        </Badge>
                      </div>
                      
                      {/* Documentos faltantes */}
                      {application.missingDocuments.length > 0 && (
                        <>
                          <Separator />
                          {application.missingDocuments.map((doc, idx) => (
                            <div key={idx} className="flex items-center justify-between py-3">
                              <div className="flex items-center gap-3">
                                <FileText className="w-5 h-5 text-muted-foreground" />
                                <p className="font-medium">{doc}</p>
                              </div>
                              <Badge variant="secondary" className="bg-destructive/10 text-destructive">
                                <AlertTriangle className="w-3 h-3 mr-1" />
                                Faltante
                              </Badge>
                            </div>
                          ))}
                        </>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </TabsContent>
        </Tabs>
      </div>

      {/* Application Detail Modal */}
      <ApplicationDetailModal 
        application={selectedApplication}
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </Layout>
  );
};
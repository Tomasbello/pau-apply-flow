import { useState } from "react";
import { FileText, CheckCircle, Clock, AlertTriangle, User, Mail, Download, Eye, Upload } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const ApplicationTracking = () => {
  const [applications] = useState([
    {
      id: "1",
      subject: "Cálculo Diferencial e Integral",
      code: "MAT101",
      professor: "María González",
      status: "pending_review",
      submittedDate: "2024-10-08",
      deadline: "2024-10-15",
      progress: 75,
      missingDocuments: ["Carta de Motivación"],
      timeline: [
        { date: "2024-10-08", event: "Postulación enviada", status: "completed" },
        { date: "2024-10-09", event: "Documentos verificados", status: "completed" },
        { date: "2024-10-10", event: "En revisión por profesor", status: "current" },
        { date: "", event: "Entrevista (si es necesaria)", status: "pending" },
        { date: "", event: "Resultado final", status: "pending" }
      ]
    },
    {
      id: "2",
      subject: "Programación Orientada a Objetos",
      code: "INFO263",
      professor: "Carlos Rodríguez",
      status: "accepted",
      submittedDate: "2024-09-25",
      deadline: "2024-10-02",
      progress: 100,
      missingDocuments: [],
      timeline: [
        { date: "2024-09-25", event: "Postulación enviada", status: "completed" },
        { date: "2024-09-26", event: "Documentos verificados", status: "completed" },
        { date: "2024-09-28", event: "Revisión completada", status: "completed" },
        { date: "2024-10-01", event: "Entrevista realizada", status: "completed" },
        { date: "2024-10-03", event: "Postulación aceptada", status: "completed" }
      ]
    }
  ]);

  const getStatusInfo = (status: string) => {
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
      default:
        return {
          label: "Desconocido",
          color: "bg-muted text-muted-foreground",
          icon: Clock
        };
    }
  };

  const documents = [
    { name: "Curriculum Vitae", status: "uploaded", date: "2024-10-08" },
    { name: "Certificado de Notas", status: "uploaded", date: "2024-10-08" },
    { name: "Carta de Motivación", status: "missing", date: null },
    { name: "Certificado de Inglés", status: "optional", date: null }
  ];

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
            <TabsTrigger value="active">Activas ({applications.filter(app => app.status === "pending_review").length})</TabsTrigger>
            <TabsTrigger value="completed">Completadas ({applications.filter(app => app.status === "accepted").length})</TabsTrigger>
            <TabsTrigger value="documents">Documentos</TabsTrigger>
          </TabsList>

          <TabsContent value="active" className="space-y-6">
            {applications
              .filter(app => app.status === "pending_review")
              .map((application) => {
                const statusInfo = getStatusInfo(application.status);
                const StatusIcon = statusInfo.icon;
                
                return (
                  <Card key={application.id} className="shadow-card">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <Badge variant="outline">{application.code}</Badge>
                            <Badge className={statusInfo.color}>
                              <StatusIcon className="w-3 h-3 mr-1" />
                              {statusInfo.label}
                            </Badge>
                          </div>
                          <CardTitle className="mb-1">{application.subject}</CardTitle>
                          <p className="text-muted-foreground">Prof. {application.professor}</p>
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
                          <p className="font-medium">{new Date(application.submittedDate).toLocaleDateString()}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Fecha límite:</p>
                          <p className="font-medium">{new Date(application.deadline).toLocaleDateString()}</p>
                        </div>
                      </div>

                      {application.missingDocuments.length > 0 && (
                        <Alert className="border-warning bg-warning/10">
                          <AlertTriangle className="w-4 h-4 text-warning" />
                          <AlertDescription>
                            <strong>Documentos faltantes:</strong> {application.missingDocuments.join(", ")}
                            <Button variant="outline" size="sm" className="ml-2">
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
                                    {new Date(item.date).toLocaleDateString()}
                                  </span>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-2 pt-4">
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4 mr-2" />
                          Ver Postulación
                        </Button>
                        <Button variant="outline" size="sm">
                          <Mail className="w-4 h-4 mr-2" />
                          Contactar Profesor
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
          </TabsContent>

          <TabsContent value="completed" className="space-y-6">
            {applications
              .filter(app => app.status === "accepted")
              .map((application) => {
                const statusInfo = getStatusInfo(application.status);
                const StatusIcon = statusInfo.icon;
                
                return (
                  <Card key={application.id} className="shadow-card">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <Badge variant="outline">{application.code}</Badge>
                            <Badge className={statusInfo.color}>
                              <StatusIcon className="w-3 h-3 mr-1" />
                              {statusInfo.label}
                            </Badge>
                          </div>
                          <CardTitle className="mb-1">{application.subject}</CardTitle>
                          <p className="text-muted-foreground">Prof. {application.professor}</p>
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
                        <Button variant="outline" size="sm">
                          <Download className="w-4 h-4 mr-2" />
                          Descargar Carta de Aceptación
                        </Button>
                        <Button variant="outline" size="sm">
                          <Mail className="w-4 h-4 mr-2" />
                          Contactar Coordinador
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
          </TabsContent>

          <TabsContent value="documents" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Estado de Documentos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {documents.map((doc, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between py-3">
                        <div className="flex items-center gap-3">
                          <FileText className="w-5 h-5 text-muted-foreground" />
                          <div>
                            <p className="font-medium">{doc.name}</p>
                            {doc.date && (
                              <p className="text-xs text-muted-foreground">
                                Subido el {new Date(doc.date).toLocaleDateString()}
                              </p>
                            )}
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          {doc.status === "uploaded" && (
                            <>
                              <Badge variant="secondary" className="bg-success/10 text-success">
                                <CheckCircle className="w-3 h-3 mr-1" />
                                Subido
                              </Badge>
                              <Button variant="outline" size="sm">
                                <Eye className="w-3 h-3 mr-1" />
                                Ver
                              </Button>
                            </>
                          )}
                          {doc.status === "missing" && (
                            <>
                              <Badge variant="secondary" className="bg-destructive/10 text-destructive">
                                <AlertTriangle className="w-3 h-3 mr-1" />
                                Faltante
                              </Badge>
                              <Button size="sm">
                                <Upload className="w-3 h-3 mr-1" />
                                Subir
                              </Button>
                            </>
                          )}
                          {doc.status === "optional" && (
                            <>
                              <Badge variant="secondary">
                                Opcional
                              </Badge>
                              <Button variant="outline" size="sm">
                                <Upload className="w-3 h-3 mr-1" />
                                Subir
                              </Button>
                            </>
                          )}
                        </div>
                      </div>
                      {index < documents.length - 1 && <Separator />}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};
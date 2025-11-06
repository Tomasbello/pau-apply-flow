import { User, GraduationCap, FileText, CheckCircle, XCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Application } from "@/data/types";
import { careers, semesters } from "@/data/mockData";

interface ApplicationDetailModalProps {
  application: Application | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ApplicationDetailModal = ({ application, open, onOpenChange }: ApplicationDetailModalProps) => {
  if (!application) return null;

  const { formData } = application;
  const careerLabel = careers.find(c => c.value === formData.career)?.label || formData.career;
  const semesterLabel = semesters.find(s => s.value === formData.semester)?.label || `${formData.semester}° Semestre`;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Detalle de Postulación</DialogTitle>
          <DialogDescription>
            {application.vacancy.subject} ({application.vacancy.code})
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {/* Datos Personales */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <User className="w-4 h-4" />
                Datos Personales
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-muted-foreground">Nombre Completo</p>
                  <p className="text-sm font-medium">{formData.firstName} {formData.lastName}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">RUT/ID</p>
                  <p className="text-sm font-medium">{formData.studentId}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="text-sm font-medium">{formData.email}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Teléfono</p>
                  <p className="text-sm font-medium">{formData.phone}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Información Académica */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                Información Académica
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-muted-foreground">Carrera</p>
                  <p className="text-sm font-medium">{careerLabel}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Semestre Actual</p>
                  <p className="text-sm font-medium">{semesterLabel}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Promedio General (PGA)</p>
                  <p className="text-sm font-medium">{formData.gpa}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Nota en {application.vacancy.code}</p>
                  <p className="text-sm font-medium">{formData.subjectGrade}</p>
                </div>
              </div>

              {formData.previousExperience && (
                <>
                  <Separator />
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Experiencia Previa</p>
                    <p className="text-sm">{formData.previousExperience}</p>
                  </div>
                </>
              )}

              {formData.motivation && (
                <>
                  <Separator />
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Motivación</p>
                    <p className="text-sm">{formData.motivation}</p>
                  </div>
                </>
              )}
            </CardContent>
          </Card>

          {/* Documentos */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Documentos Enviados
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Curriculum Vitae</span>
                  {formData.cv ? (
                    <Badge variant="secondary" className="bg-success/10 text-success">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Enviado
                    </Badge>
                  ) : (
                    <Badge variant="secondary" className="bg-destructive/10 text-destructive">
                      <XCircle className="w-3 h-3 mr-1" />
                      No enviado
                    </Badge>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Certificado de Notas</span>
                  {formData.transcript ? (
                    <Badge variant="secondary" className="bg-success/10 text-success">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Enviado
                    </Badge>
                  ) : (
                    <Badge variant="secondary" className="bg-destructive/10 text-destructive">
                      <XCircle className="w-3 h-3 mr-1" />
                      No enviado
                    </Badge>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Carta de Motivación</span>
                  {formData.motivationLetter ? (
                    <Badge variant="secondary" className="bg-success/10 text-success">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Enviado
                    </Badge>
                  ) : (
                    <Badge variant="secondary" className="bg-muted/50 text-muted-foreground">
                      Opcional
                    </Badge>
                  )}
                </div>
                {formData.additionalDocs && (
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Documentos Adicionales</span>
                    <Badge variant="secondary" className="bg-success/10 text-success">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Enviado
                    </Badge>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
};


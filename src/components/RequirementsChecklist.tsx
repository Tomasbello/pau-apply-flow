import { CheckCircle, FileText, Clock, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Vacancy } from "@/data/types";

interface RequirementsChecklistProps {
  vacancy: Vacancy;
}

export const RequirementsChecklist = ({ vacancy }: RequirementsChecklistProps) => {
  const requiredDocuments = [
    "Curriculum Vitae (PDF, máx. 5MB)",
    "Certificado de Notas (PDF, máx. 5MB)",
    "Carta de Motivación (opcional, PDF, máx. 5MB)"
  ];

  return (
    <Card className="border-primary/20 bg-primary/5">
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-primary" />
          Requisitos y Preparación para Postular
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Revisa esta información antes de iniciar tu postulación (≈10 minutos)
        </p>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible defaultValue="requirements">
          {/* Requisitos Académicos */}
          <AccordionItem value="requirements">
            <AccordionTrigger>
              <span className="font-medium">Requisitos Académicos</span>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-2">
                {vacancy.requirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded-full border-2 border-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{req}</span>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* Documentos Necesarios */}
          <AccordionItem value="documents">
            <AccordionTrigger>
              <span className="font-medium flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Documentos Necesarios
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-2">
                {requiredDocuments.map((doc, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded-full border-2 border-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{doc}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-3 p-3 bg-muted rounded-md">
                <p className="text-xs text-muted-foreground">
                  💡 <strong>Tip:</strong> Ten tus documentos listos antes de empezar para agilizar el proceso.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Detalles de la Ayudantía */}
          <AccordionItem value="details">
            <AccordionTrigger>
              <span className="font-medium">Detalles de la Ayudantía</span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Horario</p>
                    <p className="text-sm text-muted-foreground">{vacancy.schedule}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Duración</p>
                    <p className="text-sm text-muted-foreground">{vacancy.duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="secondary">{vacancy.modality}</Badge>
                  <span className="text-sm text-muted-foreground">Modalidad de trabajo</span>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
};


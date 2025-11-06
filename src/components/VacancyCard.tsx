import { Clock, Users, BookOpen, Calendar, MapPin } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/data/mockData";

interface VacancyCardProps {
  id: string;
  subject: string;
  code: string;
  professor: string;
  department: string;
  positions: number;
  deadline: string;
  modality: "presencial" | "virtual" | "híbrida";
  requirements: string[];
  onClick: (id: string) => void;
}

export const VacancyCard = ({
  id,
  subject,
  code,
  professor,
  department,
  positions,
  deadline,
  modality,
  requirements,
  onClick
}: VacancyCardProps) => {
  const getModalityColor = (modality: string) => {
    switch (modality) {
      case "presencial": return "bg-primary text-primary-foreground";
      case "virtual": return "bg-success text-success-foreground";
      case "híbrida": return "bg-warning text-warning-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <Card className="hover:shadow-elevated transition-all duration-200 cursor-pointer border-border" onClick={() => onClick(id)}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="font-mono text-xs">
                {code}
              </Badge>
              <Badge className={getModalityColor(modality)}>
                {modality}
              </Badge>
            </div>
            <h3 className="font-semibold text-foreground text-lg leading-tight mb-1">
              {subject}
            </h3>
            <p className="text-muted-foreground text-sm">
              Prof. {professor}
            </p>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="space-y-3">
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>{department}</span>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <Users className="w-4 h-4" />
              <span>{positions} vacante{positions > 1 ? 's' : ''}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-1 text-sm">
            <Calendar className="w-4 h-4 text-muted-foreground" />
            <span className="text-muted-foreground">Postula hasta:</span>
            <span className="font-medium text-foreground">{formatDate(deadline)}</span>
          </div>

          {requirements.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {requirements.slice(0, 3).map((req, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {req}
                </Badge>
              ))}
              {requirements.length > 3 && (
                <Badge variant="secondary" className="text-xs">
                  +{requirements.length - 3} más
                </Badge>
              )}
            </div>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="pt-3">
        <Button 
          className="w-full bg-gradient-primary hover:bg-primary-dark transition-all"
          onClick={(e) => {
            e.stopPropagation();
            onClick(id);
          }}
        >
          <BookOpen className="w-4 h-4 mr-2" />
          Ver Detalle y Postular
        </Button>
      </CardFooter>
    </Card>
  );
};
import { Check, Circle, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface Step {
  id: string;
  title: string;
  description: string;
  status: "completed" | "current" | "pending" | "error";
}

interface ProgressStepsProps {
  steps: Step[];
  currentStep?: string;
}

export const ProgressSteps = ({ steps, currentStep }: ProgressStepsProps) => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-8">
        {steps.map((step, index) => {
          const isLast = index === steps.length - 1;
          const stepNumber = index + 1;
          
          return (
            <div key={step.id} className="flex items-center flex-1">
              <div className="flex flex-col items-center">
                {/* Step Circle */}
                <div
                  className={cn(
                    "w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all",
                    {
                      "bg-success border-success text-success-foreground": step.status === "completed",
                      "bg-primary border-primary text-primary-foreground": step.status === "current",
                      "bg-background border-muted text-muted-foreground": step.status === "pending",
                      "bg-destructive border-destructive text-destructive-foreground": step.status === "error",
                    }
                  )}
                >
                  {step.status === "completed" ? (
                    <Check className="w-5 h-5" />
                  ) : step.status === "error" ? (
                    <AlertCircle className="w-5 h-5" />
                  ) : (
                    <span className="text-sm font-medium">{stepNumber}</span>
                  )}
                </div>
                
                {/* Step Title */}
                <div className="text-center mt-2 max-w-24">
                  <p
                    className={cn(
                      "text-sm font-medium",
                      {
                        "text-success": step.status === "completed",
                        "text-primary": step.status === "current",
                        "text-muted-foreground": step.status === "pending",
                        "text-destructive": step.status === "error",
                      }
                    )}
                  >
                    {step.title}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1 leading-tight">
                    {step.description}
                  </p>
                </div>
              </div>
              
              {/* Connector Line */}
              {!isLast && (
                <div
                  className={cn(
                    "flex-1 h-0.5 mx-4 mt-[-2rem]",
                    {
                      "bg-success": step.status === "completed",
                      "bg-muted": step.status === "pending" || step.status === "current",
                      "bg-destructive": step.status === "error",
                    }
                  )}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
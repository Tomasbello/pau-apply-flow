// Datos auxiliares para la aplicación

export const departments = [
  "Matemáticas",
  "Informática",
  "Física",
  "Química",
  "Biología",
  "Ingeniería Civil",
  "Estadística"
];

export const modalities = ["presencial", "virtual", "híbrida"] as const;

export const careers = [
  { value: "ingenieria-civil", label: "Ingeniería Civil" },
  { value: "ingenieria-informatica", label: "Ingeniería Informática" },
  { value: "matematicas", label: "Matemáticas" },
  { value: "fisica", label: "Física" },
  { value: "quimica", label: "Química" },
  { value: "biologia", label: "Biología" },
  { value: "estadistica", label: "Estadística" }
];

export const semesters = Array.from({ length: 12 }, (_, i) => ({
  value: `${i + 1}`,
  label: `${i + 1}° Semestre`
}));

// Función helper para calcular días restantes
export const calculateDaysLeft = (deadline: string): number => {
  const deadlineDate = new Date(deadline);
  const today = new Date();
  const diffTime = deadlineDate.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays > 0 ? diffDays : 0;
};

// Función helper para formatear fechas
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('es-CL', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
};

// Función helper para crear timeline por defecto
export const createDefaultTimeline = (submittedDate: string) => [
  { 
    date: submittedDate, 
    event: "Postulación enviada", 
    status: "completed" as const 
  },
  { 
    date: "", 
    event: "Documentos verificados", 
    status: "pending" as const 
  },
  { 
    date: "", 
    event: "En revisión por profesor", 
    status: "pending" as const 
  },
  { 
    date: "", 
    event: "Entrevista (si es necesaria)", 
    status: "pending" as const 
  },
  { 
    date: "", 
    event: "Resultado final", 
    status: "pending" as const 
  }
];


// Tipos compartidos para toda la aplicación

export type Modality = "presencial" | "virtual" | "híbrida";

export type ApplicationStatus = 
  | "pending_review" 
  | "accepted" 
  | "rejected" 
  | "interview";

export interface Vacancy {
  id: string;
  subject: string;
  code: string;
  professor: string;
  department: string;
  positions: number;
  deadline: string;
  deadlineTime: string;
  modality: Modality;
  description: string;
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
  schedule: string;
  duration: string;
  contact: string;
}

export interface Application {
  id: string;
  vacancyId: string;
  vacancy: {
    subject: string;
    code: string;
    professor: string;
  };
  status: ApplicationStatus;
  submittedDate: string;
  deadline: string;
  progress: number;
  missingDocuments: string[];
  timeline: TimelineItem[];
  formData: ApplicationFormData;
}

export interface TimelineItem {
  date: string;
  event: string;
  status: "completed" | "current" | "pending";
}

export interface ApplicationFormData {
  // Datos Personales
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  studentId: string;
  
  // Información Académica
  career: string;
  semester: string;
  gpa: string;
  subjectGrade: string;
  previousExperience: string;
  motivation: string;
  
  // Documentos
  cv: boolean;
  transcript: boolean;
  motivationLetter: boolean;
  additionalDocs: boolean;
}

export interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  studentId: string;
  career: string;
  semester: string;
  gpa: string;
}


import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Application, ApplicationFormData } from "@/data/types";
import { storage } from "@/utils/storage";

interface ApplicationContextType {
  applications: Application[];
  addApplication: (application: Application) => void;
  updateApplication: (id: string, updates: Partial<Application>) => void;
  getApplicationById: (id: string) => Application | undefined;
  hasAppliedToVacancy: (vacancyId: string) => boolean;
  // Estado temporal del formulario
  tempFormData: Partial<ApplicationFormData> | null;
  setTempFormData: (data: Partial<ApplicationFormData> | null) => void;
}

const ApplicationContext = createContext<ApplicationContextType | undefined>(undefined);

export const ApplicationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [applications, setApplications] = useState<Application[]>([]);
  const [tempFormData, setTempFormData] = useState<Partial<ApplicationFormData> | null>(null);

  // Cargar postulaciones desde localStorage al montar
  useEffect(() => {
    const savedApplications = storage.getApplications();
    setApplications(savedApplications);
  }, []);

  const addApplication = (application: Application) => {
    storage.saveApplication(application);
    setApplications(prev => [...prev, application]);
  };

  const updateApplication = (id: string, updates: Partial<Application>) => {
    storage.updateApplication(id, updates);
    setApplications(prev =>
      prev.map(app => (app.id === id ? { ...app, ...updates } : app))
    );
  };

  const getApplicationById = (id: string) => {
    return applications.find(app => app.id === id);
  };

  const hasAppliedToVacancy = (vacancyId: string) => {
    return applications.some(app => app.vacancyId === vacancyId);
  };

  return (
    <ApplicationContext.Provider
      value={{
        applications,
        addApplication,
        updateApplication,
        getApplicationById,
        hasAppliedToVacancy,
        tempFormData,
        setTempFormData
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useApplications = () => {
  const context = useContext(ApplicationContext);
  if (context === undefined) {
    throw new Error("useApplications debe ser usado dentro de ApplicationProvider");
  }
  return context;
};


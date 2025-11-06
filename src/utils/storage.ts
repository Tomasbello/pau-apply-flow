import { Application } from "@/data/types";

const STORAGE_KEY = "pau_applications";

// Helper para localStorage con manejo de errores
export const storage = {
  // Obtener todas las postulaciones
  getApplications: (): Application[] => {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error("Error al leer postulaciones:", error);
      return [];
    }
  },

  // Guardar una nueva postulación
  saveApplication: (application: Application): void => {
    try {
      const applications = storage.getApplications();
      applications.push(application);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(applications));
    } catch (error) {
      console.error("Error al guardar postulación:", error);
    }
  },

  // Actualizar una postulación existente
  updateApplication: (id: string, updates: Partial<Application>): void => {
    try {
      const applications = storage.getApplications();
      const index = applications.findIndex(app => app.id === id);
      if (index !== -1) {
        applications[index] = { ...applications[index], ...updates };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(applications));
      }
    } catch (error) {
      console.error("Error al actualizar postulación:", error);
    }
  },

  // Obtener postulación por ID
  getApplicationById: (id: string): Application | undefined => {
    const applications = storage.getApplications();
    return applications.find(app => app.id === id);
  },

  // Verificar si ya existe una postulación para una vacante
  hasAppliedToVacancy: (vacancyId: string): boolean => {
    const applications = storage.getApplications();
    return applications.some(app => app.vacancyId === vacancyId);
  },

  // Limpiar todas las postulaciones (útil para desarrollo)
  clearApplications: (): void => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.error("Error al limpiar postulaciones:", error);
    }
  }
};


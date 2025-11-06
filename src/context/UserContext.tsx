import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { UserProfile } from "@/data/types";

interface UserContextType {
  user: UserProfile;
  updateProfile: (data: Partial<UserProfile>) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

const defaultUser: UserProfile = {
  firstName: "Juan",
  lastName: "Pérez",
  email: "juan.perez@estudiante.universidad.cl",
  phone: "+56 9 1234 5678",
  studentId: "20123456-7",
  career: "ingenieria-informatica",
  semester: "6",
  gpa: "6.2"
};

const STORAGE_KEY = "pau_user_profile";

const loadUserFromStorage = (): UserProfile => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error("Error loading user profile from localStorage:", error);
  }
  return defaultUser;
};

const saveUserToStorage = (user: UserProfile) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  } catch (error) {
    console.error("Error saving user profile to localStorage:", error);
  }
};

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserProfile>(loadUserFromStorage);

  useEffect(() => {
    saveUserToStorage(user);
  }, [user]);

  const updateProfile = (data: Partial<UserProfile>) => {
    setUser(prev => ({ ...prev, ...data }));
  };

  return (
    <UserContext.Provider value={{ user, updateProfile }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within UserProvider");
  }
  return context;
};


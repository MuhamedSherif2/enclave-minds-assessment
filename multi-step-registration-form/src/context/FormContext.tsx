import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

/* ---------- Types ---------- */
export interface ProfileData {
  name: string;
  email: string;
}

export interface ExperienceData {
  years: string;
  skills: string;
}

export interface FormData {
  profile: ProfileData;
  experience: ExperienceData;
}

interface FormContextType {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

/* ---------- Context ---------- */
const FormContext = createContext<FormContextType | undefined>(undefined);

/* ---------- Provider ---------- */
export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<FormData>({
    profile: {
      name: "",
      email: ""
    },
    experience: {
      years: "",
      skills: ""
    }
  });

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};

/* ---------- Hook ---------- */
export const useFormContext = (): FormContextType => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used inside FormProvider");
  }
  return context;
};

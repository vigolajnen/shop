import React, { useState, createContext, useContext, ReactNode } from "react";

interface FormData {
  [key: string]: any;
}

interface FormContextType {
  data: FormData;
  setFormValues: (values: FormData) => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

interface FormProviderProps {
  children: ReactNode;
}

export default function FormProvider({ children }: FormProviderProps): JSX.Element {
  const [data, setData] = useState<FormData>({});

  const setFormValues = (values: FormData): void => {
    setData((prevValues: FormData) => ({
      ...prevValues,
      ...values,
    }));
  };

  return (
    <FormContext.Provider value={{ data, setFormValues }}>
      {children}
    </FormContext.Provider>
  );
}

export const useFormData = (): FormContextType => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormData must be used within a FormProvider");
  }
  return context;
}

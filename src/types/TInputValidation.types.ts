export type TInputValidation = {
  minLength?: { value: number; message: string };
  maxLength?: { value: number; message: string };
  message?: string;
} | null;

export type TInputValidation = {
  minLength?: {
    value: number;
    message: string;
  };
  maxLength?: {
    value: number;
    message: string;
  };
  pattern?: {
    value: string;
    message: string;
  };
  message?: string;
} | null;

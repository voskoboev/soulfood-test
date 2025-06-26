export interface IGeneratedFormControlInputValidation {
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
}

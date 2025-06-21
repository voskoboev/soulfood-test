import type { IRequiredFormControlProps } from "@/types/IRequiredFormControlProps.types";
import type { TInputValidation } from "./TInputValidation.types";

export interface IFormControlInputProps extends IRequiredFormControlProps {
  name?: string;
  placeholder?: string;
  required?: boolean;
  validation?: TInputValidation;
}

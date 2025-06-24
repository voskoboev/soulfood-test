import type { TInputValidation } from "@/types/TInputValidation.types";
import type { IFormControlPropsRequired } from "@/types/IFormControlPropsRequired.types";

export interface IFormControlInputProps extends IFormControlPropsRequired {
  name?: string;
  placeholder?: string;
  helpMessage?: string;
  required?: boolean;
  validation?: TInputValidation;
}

import type { IFormControlPropsRequired } from "@/types/IFormControlPropsRequired.types";
import type { IFormControlSelectOption } from "./IFormControlSelectOption.types";

export interface IFormControlSelectProps extends IFormControlPropsRequired {
  options: IFormControlSelectOption[];
  name?: string;
  required?: boolean;
  validation?: {
    message: string;
  };
}

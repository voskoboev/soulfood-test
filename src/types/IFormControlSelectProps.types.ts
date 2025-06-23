import type { IRequiredFormControlProps } from "@/types/IRequiredFormControlProps.types";
import type { IFormControlSelectOption } from "./IFormControlSelectOption.types";

export interface IFormControlSelectProps extends IRequiredFormControlProps {
  options: IFormControlSelectOption[];
  required?: boolean;
  validation?: {
    message: string;
  } | null;
}

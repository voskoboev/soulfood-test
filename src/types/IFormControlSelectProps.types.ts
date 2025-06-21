import type { IRequiredFormControlProps } from "@/types/IRequiredFormControlProps.types";
import type { IFormControlSelectOption } from "./IFormControlSelectOption.types";

export interface IFormControlSelectProps extends IRequiredFormControlProps {
  options: IFormControlSelectOption[];
  required?: boolean;
  defaultValue?: string | null;
  validation?: {
    message: string;
  } | null;
}

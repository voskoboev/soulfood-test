import type { IFormControlPropsRequired } from "@/types/IFormControlPropsRequired.types";

export interface IFormControlSelectProps extends IFormControlPropsRequired {
  options: {
    text: string;
    value: string;
  }[];
  name?: string;
  required?: boolean;
  helpMessage?: string;
  validation?: any;
}

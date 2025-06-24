import type { IFormControlPropsRequired } from "@/types/IFormControlPropsRequired.types";

export interface IFormControlCheckbox extends IFormControlPropsRequired {
  name?: string;
  checked?: boolean;
  required?: boolean;
  validation?: {
    message: string;
  };
}

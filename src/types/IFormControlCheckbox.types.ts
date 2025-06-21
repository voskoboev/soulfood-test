import type { IRequiredFormControlProps } from "@/types/IRequiredFormControlProps.types";

export interface IFormControlCheckbox extends IRequiredFormControlProps {
  name?: string;
  checked?: boolean;
  validation?: {
    message: string;
  } | null;
}

import type { IRequiredAppFormControlProps } from "@/types/IRequiredAppFormControlProps.types";

export interface IAppFormControlInputProps
  extends IRequiredAppFormControlProps {
  name?: string;
  placeholder?: string;
  required?: boolean;
  validation?: object;
}

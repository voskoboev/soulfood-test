import type { TFormControl } from "@/types/TFormControl.types";

export interface IGeneratedFormProps {
  controls: TFormControl[];
  getFormData: (data: Record<string, FormDataEntryValue>) => void;
}

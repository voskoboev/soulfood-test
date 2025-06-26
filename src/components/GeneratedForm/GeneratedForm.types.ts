import type { TGeneratedFormControl } from "@/types/TGeneratedFormControl.types";

export interface IGeneratedFormProps {
  controls: TGeneratedFormControl[];
  getFormData: (data: Record<string, FormDataEntryValue>) => void;
}

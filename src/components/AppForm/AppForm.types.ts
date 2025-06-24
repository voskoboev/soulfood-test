import type { TFormControl } from "@/types/TFormControl.types";

export interface IAppFormProps {
  controls: TFormControl[];
  getFormData: (data: Record<string, FormDataEntryValue>) => void;
}

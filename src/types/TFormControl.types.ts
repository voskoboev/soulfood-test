import type { IFormControlInputProps } from "@/types/IFormControlInputProps.types";
import type { IFormControlSelectProps } from "@/types/IFormControlSelectProps.types";
import type { IFormControlCheckbox } from "@/types/IFormControlCheckbox.types";

export type TFormControl =
  | IFormControlInputProps
  | IFormControlSelectProps
  | IFormControlCheckbox;

import type { IGeneratedFormControlInput } from "@/types/IGeneratedFormControlInput.types";
import type { IGeneratedFormControlSelect } from "@/types/IGeneratedFormControlSelect.types";
import type { IGeneratedFormControlCheckbox } from "@/types/IGeneratedFormControlCheckbox.types";

export type TGeneratedFormControl =
  | IGeneratedFormControlInput
  | IGeneratedFormControlSelect
  | IGeneratedFormControlCheckbox;

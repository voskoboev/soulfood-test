import type { ModelRef } from "vue";
import type { TInputValidation } from "@/types/TInputValidation.types";

export interface IUseValidationInputParams {
  validation: TInputValidation;
  modelValue: ModelRef<string>;
  modelIsValid: ModelRef<boolean>;
}

import type { TInputValidation } from "@/types/TInputValidation.types";
import type { ModelRef } from "vue";

export interface IUseValidationParams {
  validation: TInputValidation;
  modelValue: ModelRef<string>;
  modelIsValid: ModelRef<boolean>;
}

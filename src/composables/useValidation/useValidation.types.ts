import type { ModelRef, Ref } from "vue";
import type { IGeneratedFormControlInputValidation } from "@/types/IGeneratedFormControlInputValidation.types";

export interface IUseValidationInputParams {
  validation: IGeneratedFormControlInputValidation;
  inputValue: Ref<string>;
  modelIsValid: ModelRef<boolean>;
}

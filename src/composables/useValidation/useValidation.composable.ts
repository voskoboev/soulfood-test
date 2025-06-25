import { isNumber } from "@/types/guards/isNumber.guard";
import type { IUseValidationInputParams } from "@/composables/useValidation/useValidation.types";
import { isString } from "@/types/guards/isString.gurard";

export function useValidation() {
  const validateInput = ({
    validation,
    modelValue,
    modelIsValid,
  }: IUseValidationInputParams) => {
    const inputProjectedMinLength = validation?.minLength?.value;
    const inputProjectedMaxLength = validation?.maxLength?.value;
    const inputPattern = validation?.pattern?.value;

    const hasMinLength = isNumber(inputProjectedMinLength);
    const hasMaxLength = isNumber(inputProjectedMaxLength);
    const hasRegExpString = isString(inputPattern);

    if (!hasMinLength && !hasMaxLength && !hasRegExpString) {
      modelIsValid.value = true;
      return;
    }

    const isMinLengthValid =
      !hasMinLength || modelValue.value.length >= inputProjectedMinLength;

    const isMaxLengthValid =
      !hasMaxLength || modelValue.value.length <= inputProjectedMaxLength;

    const isPatternValid =
      !hasRegExpString || new RegExp(inputPattern).test(modelValue.value);

    modelIsValid.value = isMinLengthValid && isMaxLengthValid && isPatternValid;
  };

  return {
    validateInput,
  };
}

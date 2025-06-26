import { isNumber } from "@/types/guards/isNumber.guard";
import { isString } from "@/types/guards/isString.gurard";
import type { IUseValidationInputParams } from "@/composables/useValidation/useValidation.types";

export function useValidation() {
  const validateInput = ({
    validation,
    inputValue,
    modelIsValid,
  }: IUseValidationInputParams) => {
    const inputProjectedMinLength = validation?.minLength?.value;
    const inputProjectedMaxLength = validation?.maxLength?.value;
    const inputPattern = validation?.pattern?.value;

    const hasMinLengthNumber = isNumber(inputProjectedMinLength);
    const hasMaxLengthNumber = isNumber(inputProjectedMaxLength);
    const hasRegExpString = isString(inputPattern);

    if (!hasMinLengthNumber && !hasMaxLengthNumber && !hasRegExpString) {
      modelIsValid.value = true;
      return;
    }

    const isMinLengthValid =
      !hasMinLengthNumber || inputValue.value.length >= inputProjectedMinLength;

    const isMaxLengthValid =
      !hasMaxLengthNumber || inputValue.value.length <= inputProjectedMaxLength;

    const isPatternValid =
      !hasRegExpString || new RegExp(inputPattern).test(inputValue.value);

    modelIsValid.value = isMinLengthValid && isMaxLengthValid && isPatternValid;
  };

  return {
    validateInput,
  };
}

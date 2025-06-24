import { isNumber } from "@/types/guards/isNumber.guard";
import type { IUseValidationParams } from "@/composables/useValidation/useValidation.types";
import { isRegEx } from "@/types/guards/isRegEx.guard";

export function useValidation() {
  const validateInput = ({
    validation,
    modelValue,
    modelIsValid,
  }: IUseValidationParams) => {
    const inputProjectedMinLength = validation?.minLength?.value;
    const inputProjectedMaxLength = validation?.maxLength?.value;
    const inputPattern = validation?.pattern?.value;

    const hasMinLength = isNumber(inputProjectedMinLength);
    const hasMaxLength = isNumber(inputProjectedMaxLength);
    const hasRegExp = isRegEx(inputPattern);

    if (!hasMinLength && !hasMaxLength && !hasRegExp) {
      modelIsValid.value = true;
      return;
    }

    const isValidByPattern =
      !hasRegExp ||
      (hasRegExp && new RegExp(inputPattern).test(modelValue.value));

    const isValidByMinLength =
      !hasMinLength || modelValue.value.length >= inputProjectedMinLength;

    const isValidByMaxLength =
      !hasMaxLength || modelValue.value.length <= inputProjectedMaxLength;

    modelIsValid.value =
      isValidByMinLength && isValidByMaxLength && isValidByPattern;
  };

  const validateSelect = () => {};

  const validateCheckbox = () => {};

  return {
    validateInput,
    validateSelect,
    validateCheckbox,
  };
}

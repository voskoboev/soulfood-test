import { isNumber } from "@/types/guards/isNumber.guard";
import type { IUseValidationParams } from "@/composables/useValidation/validateInput.types";

export function useValidation() {
  const validateInput = ({
    validation,
    modelValue,
    modelIsValid,
  }: IUseValidationParams) => {
    const inputProjectedMinLength = validation?.minLength?.value;
    const inputProjectedMaxLength = validation?.maxLength?.value;

    const hasMinLength = isNumber(inputProjectedMinLength);
    const hasMaxLength = isNumber(inputProjectedMaxLength);

    if (!hasMinLength && !hasMaxLength) {
      modelIsValid.value = true;
      return;
    }

    const isValidByMinLength =
      !hasMinLength || modelValue.value.length >= inputProjectedMinLength;

    const isValidByMaxLength =
      !hasMaxLength || modelValue.value.length <= inputProjectedMaxLength;

    modelIsValid.value = isValidByMinLength && isValidByMaxLength;
  };

  const validateSelect = () => {};

  const validateCheckbox = () => {};

  return {
    validateInput,
    validateSelect,
    validateCheckbox,
  };
}

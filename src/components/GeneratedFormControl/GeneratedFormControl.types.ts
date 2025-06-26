import type { TGeneratedFormControl } from "@/types/TGeneratedFormControl.types";
import type { IGeneratedFormControlInput } from "@/types/IGeneratedFormControlInput.types";
import type { IGeneratedFormControlSelect } from "@/types/IGeneratedFormControlSelect.types";
import type { IGeneratedFormControlCheckbox } from "@/types/IGeneratedFormControlCheckbox.types";

export interface IGeneratedFormControlProps {
  control: TGeneratedFormControl;
}

const isControlWithType = (value: unknown): value is { type: string } => {
  return typeof value === "object" && value !== null && "type" in value;
};

export const isControlInput = (
  value: unknown
): value is IGeneratedFormControlInput => {
  return (
    isControlWithType(value) &&
    (value.type === "text" ||
      value.type === "password" ||
      value.type === "email")
  );
};

export const isControlSelect = (
  value: unknown
): value is IGeneratedFormControlSelect => {
  return isControlWithType(value) && value.type === "select";
};

export const isControlCheckbox = (
  value: unknown
): value is IGeneratedFormControlCheckbox => {
  return isControlWithType(value) && value.type === "checkbox";
};

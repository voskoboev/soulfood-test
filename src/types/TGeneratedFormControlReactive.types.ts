import type { Ref } from "vue";
import type { TGeneratedFormControl } from "@/types/TGeneratedFormControl.types";

export type TGeneratedFormControlReactive = TGeneratedFormControl & {
  isValid: Ref<boolean>;
};

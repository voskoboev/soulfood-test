import type { Ref } from "vue";
import type { TFormControl } from "./TFormControl.types";

export type TFormControlReactive = TFormControl & {
  id: number;
  data: Ref<string>;
  isValid: Ref<boolean>;
};

import type { IGeneratedFormControlRequired } from "@/types/IGeneratedFormControlRequired.types";
import type { IGeneratedFormControlCommon } from "@/types/IGeneratedFormControlCommon.types";

export interface IGeneratedFormControlCheckbox
  extends IGeneratedFormControlRequired,
    IGeneratedFormControlCommon {
  checked?: boolean;
}

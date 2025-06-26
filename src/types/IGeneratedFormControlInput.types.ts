import type { IGeneratedFormControlRequired } from "@/types/IGeneratedFormControlRequired.types";
import type { IGeneratedFormControlCommon } from "@/types/IGeneratedFormControlCommon.types";
import type { IGeneratedFormControlInputValidation } from "./IGeneratedFormControlInputValidation.types";

export interface IGeneratedFormControlInput
  extends IGeneratedFormControlRequired,
    IGeneratedFormControlCommon {
  validation?: IGeneratedFormControlInputValidation;
}

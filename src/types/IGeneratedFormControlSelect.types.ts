import type { IGeneratedFormControlRequired } from "@/types/IGeneratedFormControlRequired.types";
import type { IGeneratedFormControlCommon } from "@/types/IGeneratedFormControlCommon.types";

export interface IGeneratedFormControlSelect
  extends IGeneratedFormControlRequired,
    IGeneratedFormControlCommon {
  options: {
    text: string;
    value: string;
  }[];
}

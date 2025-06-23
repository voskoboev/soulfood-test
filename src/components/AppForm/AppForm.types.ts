import type { TFormControl } from "@/types/TFormControl.types";
import type { IUser } from "@/types/IUser.types";

export interface IAppFormProps {
  controls: TFormControl[];
  registerUser: (newUser: IUser) => void;
  // isValid: Ref
}

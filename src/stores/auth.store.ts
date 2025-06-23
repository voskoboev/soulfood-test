import { defineStore } from "pinia";
import type { IUser } from "@/types/IUser.types";

export const useAuthStore = defineStore("auth", () => {
  const handleRegisterUser = (user: IUser) => {
    console.log("user", user);
  };

  return {
    handleRegisterUser,
  };
});

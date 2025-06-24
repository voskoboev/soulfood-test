import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", () => {
  const handleRegisterUser = (user: Record<string, FormDataEntryValue>) => {
    console.log("user", user);
  };

  return {
    handleRegisterUser,
  };
});

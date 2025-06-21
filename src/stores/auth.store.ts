import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", () => {
  const handleRegisterUser = (user: unknown) => {
    console.log("user", user);
  };

  return {
    handleRegisterUser,
  };
});

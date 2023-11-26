import axios from "axios";
import { defineStore } from "pinia";

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    user: false,
  }),
  getters: {
    isLoggedIn: (state) => state.user !== false,
    getUser: (state) => state.user,
  },
  actions: {
    async fetchUser() {
      try {
        const { data } = await axios.get(
          "https://zullkit-backend.belajarkoding.com/api/user",
          {
            headers: {
              Authorization:
                localStorage.getItem("token_type") +
                " " +
                localStorage.getItem("access_token"),
            },
          }
        );
        this.user = data;
      } catch (error) {
        this.user = false;
      }
    },
  },
});

import { api } from "./apiConfig";

export const authRoutes = {
  login: async (email: string, password: string) => {
    return api
      .post("/auth/login", {
        email,
        password,
      })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error;
      });
  },
  me: async (token: string) => {
    return api
      .get("/auth/me", {
        headers: {
          Authentication: `Bearer ${token}`,
        },
      })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error;
      });
  },
};

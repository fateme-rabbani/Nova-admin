import axios from "axios";
import type { store } from "../../Redux/store";
import { logoutUser } from "../../Redux/auth/authActions";
import { axiosInstance } from "./axiosInstance";

export function setupAuthInterceptors(appStore: typeof store) {
  axiosInstance.interceptors.request.use((config) => {
    const token = appStore.getState().auth.token;

    if (token && config.url !== "/auth/login") {
      config.headers.set("Authorization", `Bearer ${token}`);
    }

    return config;
  });

  axiosInstance.interceptors.response.use(
    (response) => response,
    (error: unknown) => {
      if (axios.isAxiosError(error)) {
        const unauthorized = error.response?.status === 401;
        const isLogin = error.config?.url === "/auth/login";

        if (unauthorized && !isLogin) {
          logoutUser(appStore.dispatch);
        }
      }

      return Promise.reject(error);
    },
  );
}

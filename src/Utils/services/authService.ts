import type { AuthSession, LoginValues } from "../../types/auth";
import { axiosInstance } from "../api/axiosInstance";

export async function login(values: LoginValues): Promise<AuthSession> {
  const response = await axiosInstance.post<{ token: string }>(
    "/auth/login",
    values,
  );
  const token = response.data.token;
  if (typeof token !== "string" || !token.trim()) {
    throw new Error("Invalid login response");
  }

  return { token, username: values.username };
}

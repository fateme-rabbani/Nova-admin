import type { CreateUserValues, User } from "../../types/user";
import { axiosInstance } from "../api/axiosInstance";

export async function getUsers(): Promise<User[]> {
  const response = await axiosInstance.get<User[]>("/users");

  return response.data;
}

export async function createUser(user: CreateUserValues): Promise<User> {
  const response = await axiosInstance.post<{ id: number }>("/users", user);

  return { ...user, id: response.data.id };
}

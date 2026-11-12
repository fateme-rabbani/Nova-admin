import type { Product } from "../../types/product";
import { axiosInstance } from "../api/axiosInstance";

export async function getProducts(): Promise<Product[]> {
  const response = await axiosInstance.get<Product[]>("/products");

  return response.data;
}

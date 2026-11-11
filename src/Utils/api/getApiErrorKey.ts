import axios from "axios";

export function getApiErrorKey(error: unknown) {
  if (axios.isCancel(error)) {
    return "requestCanceled";
  }

  if (!axios.isAxiosError(error)) {
    return "unexpectedError";
  }

  if (error.code === "ECONNABORTED" || error.code === "ETIMEDOUT") {
    return "requestTimeout";
  }

  if (error.code === "ERR_NETWORK") {
    return "networkError";
  }

  const status = error.response?.status;

  if (status === 401) {
    return "unauthorized";
  }

  if (status !== undefined && status >= 500) {
    return "serverError";
  }

  return "requestFailed";
}

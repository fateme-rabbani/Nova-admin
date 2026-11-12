import * as Yup from "yup";

export function loginValidation(text: { required: string }) {
  return Yup.object({
    username: Yup.string().trim().required(text.required),
    password: Yup.string().trim().required(text.required),
  });
}

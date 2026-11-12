import * as Yup from "yup";

interface Messages {
  required: string;
  invalidEmail: string;
}

export function userValidation(text: Messages) {
  return Yup.object({
    firstname: Yup.string().trim().required(text.required),
    lastname: Yup.string().trim().required(text.required),
    username: Yup.string().trim().required(text.required),
    email: Yup.string().trim().email(text.invalidEmail).required(text.required),
    password: Yup.string().trim().required(text.required),
    phone: Yup.string().trim().required(text.required),
  });
}

import * as Yup from "yup";

interface Messages {
  required: string;
  invalidImage: string;
  invalidPrice: string;
}

export function productValidation(text: Messages) {
  return Yup.object({
    title: Yup.string().trim().required(text.required),
    category: Yup.string().required(text.required),
    price: Yup.number()
      .typeError(text.invalidPrice)
      .positive(text.invalidPrice)
      .required(text.required),
    image: Yup.string()
      .trim()
      .required(text.required)
      .url(text.invalidImage),
  });
}

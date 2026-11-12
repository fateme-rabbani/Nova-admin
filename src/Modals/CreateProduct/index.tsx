import { useState } from "react";
import { useFormik } from "formik";
import { ImageUp } from "lucide-react";
import Modal from "../../Shared/Modal";
import Input from "../../Shared/Input";
import Dropdown from "../../Shared/Dropdown";
import Button from "../../Shared/Button";
import { dictionary } from "../../Dictionary";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { addProduct } from "../../Redux/products/productsSlice";
import { createProduct } from "../../Utils/services/productService";
import { productValidation } from "../../Validations/product";
import {
  Form,
  Fields,
  ImagePreview,
  Preview,
  ErrorText,
  Footer,
} from "./styles";

interface CreateProductProps {
  onClose: () => void;
  onCreated: () => void;
}

function CreateProduct({ onClose, onCreated }: CreateProductProps) {
  const dispatch = useAppDispatch();
  const language = useAppSelector((state) => state.settings.language);
  const products = useAppSelector((state) => state.products.items);
  const text = dictionary[language].products;

  const [submitError, setSubmitError] = useState("");
  const [imageFailed, setImageFailed] = useState(false);
  const [previewUrl, setPreviewUrl] = useState("");

  const categories = [...new Set(products.map((item) => item.category))];

  const formik = useFormik({
    initialValues: {
      title: "",
      category: "",
      price: "",
      image: "",
    },
    validationSchema: productValidation(text),
    onSubmit: async (values) => {
      setSubmitError("");

      try {
        const product = await createProduct({
          ...values,
          title: values.title.trim(),
          price: Number(values.price),
          image: values.image.trim(),
        });

        dispatch(addProduct(product));
        onCreated();
        onClose();
      } catch {
        setSubmitError(text.saveError);
      }
    },
  });

  function handleClose() {
    if (!formik.isSubmitting) {
      onClose();
    }
  }

  return (
    <Modal isOpen onClose={handleClose} title={text.create}>
      <Form onSubmit={formik.handleSubmit} noValidate>
        <Fields disabled={formik.isSubmitting}>
          <Input
            label={text.title}
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.title ? formik.errors.title : undefined}
          />

          <Dropdown
            label={text.category}
            placeholder={text.selectCategory}
            options={categories.map((category) => ({
              value: category,
              label: category,
            }))}
            name="category"
            value={formik.values.category}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.category ? formik.errors.category : undefined}
          />

          <Input
            name="price"
            label={`${text.price} (${text.currency})`}
            formatNumber
            numericValue={formik.values.price}
            onValueChange={(value) => formik.setFieldValue("price", value)}
            onBlur={formik.handleBlur}
            error={formik.touched.price ? formik.errors.price : undefined}
          />

          <Input
            label={text.imageUrl}
            dir="ltr"
            name="image"
            value={formik.values.image}
            onChange={formik.handleChange}
            onBlur={(event) => {
              formik.handleBlur(event);
              setImageFailed(false);
              setPreviewUrl(event.target.value.trim());
            }}
            error={formik.touched.image ? formik.errors.image : undefined}
          />
        </Fields>

        <ImagePreview>
          {previewUrl && !imageFailed ? (
            <Preview
              src={previewUrl}
              alt={formik.values.title}
              onError={() => setImageFailed(true)}
            />
          ) : (
            <ImageUp size={40} />
          )}
        </ImagePreview>

        {submitError && <ErrorText>{submitError}</ErrorText>}

        <Footer>
          <Button type="submit" disabled={formik.isSubmitting}>
            {text.save}
          </Button>
          <Button
            variant="secondary"
            onClick={handleClose}
            disabled={formik.isSubmitting}
          >
            {text.cancel}
          </Button>
        </Footer>
      </Form>
    </Modal>
  );
}

export default CreateProduct;

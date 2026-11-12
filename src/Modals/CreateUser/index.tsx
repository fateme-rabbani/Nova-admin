import { useState } from "react";
import { useFormik } from "formik";
import Modal from "../../Shared/Modal";
import Input from "../../Shared/Input";
import Button from "../../Shared/Button";
import { dictionary } from "../../Dictionary";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { addUser } from "../../Redux/users/usersSlice";
import { createUser } from "../../Utils/services/userService";
import { userValidation } from "../../Validations/user";
import { Form, Fields, ErrorText, Footer } from "./styles";

interface CreateUserProps {
  onClose: () => void;
  onCreated: () => void;
}

function CreateUser({ onClose, onCreated }: CreateUserProps) {
  const dispatch = useAppDispatch();
  const language = useAppSelector((state) => state.settings.language);
  const text = dictionary[language].users;
  const [submitError, setSubmitError] = useState("");

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      password: "",
      phone: "",
    },
    validationSchema: userValidation(text),
    onSubmit: async (values) => {
      setSubmitError("");

      try {
        const userData = {
          firstname: values.firstname,
          lastname: values.lastname,
          name: {
            firstname: values.firstname,
            lastname: values.lastname,
          },
          username: values.username,
          email: values.email,
          phone: values.phone,
          password: values.password,
        };

        const user = await createUser(userData);
        dispatch(addUser({
          id: user.id,
          name: user.name,
          username: user.username,
          email: user.email,
          phone: user.phone,
        }));
        onCreated();
        onClose();
      } catch {
        setSubmitError(text.saveError);
      }
    },
  });

  function handleClose() {
    if (!formik.isSubmitting) onClose();
  }

  return (
    <Modal isOpen onClose={handleClose} title={text.create}>
      <Form onSubmit={formik.handleSubmit} autoComplete="off" noValidate>
        <Fields disabled={formik.isSubmitting}>
          <Input
            id="create-user-firstname"
            name="firstname"
            label={text.firstname}
            value={formik.values.firstname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.firstname ? formik.errors.firstname : undefined}
          />
          <Input
            id="create-user-lastname"
            name="lastname"
            label={text.lastname}
            value={formik.values.lastname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.lastname ? formik.errors.lastname : undefined}
          />
          <Input
            id="create-user-username"
            name="username"
            label={text.username}
            autoComplete="off"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.username ? formik.errors.username : undefined}
          />
          <Input
            id="create-user-email"
            name="email"
            type="email"
            label={text.email}
            autoComplete="off"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email ? formik.errors.email : undefined}
          />
          <Input
            id="create-user-password"
            name="password"
            type="password"
            label={text.password}
            autoComplete="new-password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password ? formik.errors.password : undefined}
          />
          <Input
            id="create-user-phone"
            name="phone"
            type="tel"
            label={text.phone}
            autoComplete="off"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.phone ? formik.errors.phone : undefined}
          />
        </Fields>

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

export default CreateUser;

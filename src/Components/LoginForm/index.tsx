import { useState } from "react";
import { useFormik } from "formik";
import Input from "../../Shared/Input";
import Button from "../../Shared/Button";
import { dictionary } from "../../Dictionary";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { setAuth } from "../../Redux/auth/authSlice";
import { login } from "../../Utils/services/authService";
import { getApiErrorKey } from "../../Utils/api/getApiErrorKey";
import { saveAuthSession } from "../../Storage/auth";
import { loginValidation } from "../../Validations/login";
import logoDark from "../../assets/Icons/logo-dark.svg";
import logoLight from "../../assets/Icons/logo-light.svg";
import { Card, Title, Form, Brand, Fields, ErrorText } from "./styles";

function LoginForm() {
  const dispatch = useAppDispatch();
  const { language, darkMode } = useAppSelector((state) => state.settings);
  const text = dictionary[language].auth;
  const [errorKey, setErrorKey] = useState<
    "invalidCredentials" | "networkError" | "timeout" | "error" | null
  >(null);

  const formik = useFormik({
    initialValues: { username: "", password: "" },
    validationSchema: loginValidation(text),
    onSubmit: async (values) => {
      setErrorKey(null);

      try {
        const session = await login({
          username: values.username.trim(),
          password: values.password,
        });
        saveAuthSession(session);
        dispatch(setAuth(session));
      } catch (error) {
        const key = getApiErrorKey(error);
        if (key === "unauthorized") setErrorKey("invalidCredentials");
        else if (key === "networkError") setErrorKey("networkError");
        else if (key === "requestTimeout") setErrorKey("timeout");
        else setErrorKey("error");
      }
    },
  });

  return (
    <Card>
      <Title>{text.title}</Title>
      <Form onSubmit={formik.handleSubmit}>
        <Brand>
          <img src={darkMode ? logoDark : logoLight} alt="NOVA" />
        </Brand>
        <Fields disabled={formik.isSubmitting}>
          <Input
            id="login-username"
            name="username"
            label={text.username}
            autoComplete="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.username ? formik.errors.username : undefined}
          />
          <Input
            id="login-password"
            name="password"
            type="password"
            label={text.password}
            autoComplete="current-password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password ? formik.errors.password : undefined}
          />
        </Fields>
        {errorKey && <ErrorText>{text[errorKey]}</ErrorText>}
        <Button type="submit" disabled={formik.isSubmitting}>
          {formik.isSubmitting ? text.submitting : text.submit}
        </Button>
      </Form>
    </Card>
  );
}

export default LoginForm;

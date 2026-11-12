import { Navigate } from "react-router";
import LoginForm from "../../Components/LoginForm";
import { useAppSelector } from "../../Redux/hooks";
import { routes } from "../../Routes/routes";
import { Container } from "./styles";

function Login() {
  const token = useAppSelector((state) => state.auth.token);

  if (token) {
    return <Navigate to={routes.products} replace />;
  }

  return (
    <Container>
      <LoginForm />
    </Container>
  );
}

export default Login;

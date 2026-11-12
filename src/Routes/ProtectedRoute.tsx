import { Navigate, Outlet } from "react-router";
import Layout from "../Shared/Layout";
import { useAppSelector } from "../Redux/hooks";
import { routes } from "./routes";

function ProtectedRoute() {
  const token = useAppSelector((state) => state.auth.token);

  if (!token) {
    return <Navigate to={routes.login} replace />;
  }

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export default ProtectedRoute;

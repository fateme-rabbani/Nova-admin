import { Navigate, Route, Routes } from "react-router";
import Products from "../Pages/Products";
import Users from "../Pages/Users";
import Login from "../Pages/Login";
import ProtectedRoute from "./ProtectedRoute";
import { routes } from "./routes";

function AppRoutes() {
  return (
    <Routes>
      <Route path={routes.login} element={<Login />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Navigate to={routes.products} replace />} />
        <Route path={routes.products} element={<Products />} />
        <Route path={routes.users} element={<Users />} />
        <Route path={routes.dashboard} element={null} />
        <Route path={routes.settings} element={null} />
        <Route path="*" element={<Navigate to={routes.products} replace />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;

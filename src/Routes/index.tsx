import { Navigate, Route, Routes } from "react-router";
import Products from "../Pages/Products";
import { routes } from "./routes";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={routes.products} replace />} />
      <Route path={routes.products} element={<Products />} />
      <Route path="*" element={null} />
    </Routes>
  );
}

export default AppRoutes;

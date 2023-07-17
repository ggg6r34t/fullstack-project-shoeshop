import { Routes, Route } from "react-router-dom";

import PageNotFound from "./components/pages/error/NotFound";
import HomePage from "./pages/Home";
import ProductListPage from "./pages/Product";
import ProductDetailsListPage from "./pages/ProductDetails";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import UserInfoPage from "./pages/UserAccount";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductListPage />} />
      <Route path="/products/:name" element={<ProductDetailsListPage />} />
      <Route path="/account/login" element={<LoginPage />} />
      <Route path="/account/register" element={<RegisterPage />} />
      <Route path="/account" element={<UserInfoPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default AppRoutes;

import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import PageNotFound from "./components/error/NotFound";
import HomePage from "./pages/Home";
import ProductListPage from "./pages/Product";
import ProductDetailsListPage from "./pages/ProductDetails";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import UserInfoPage from "./pages/UserAccount";
import OrderPage from "./components/order/OrderPage";
import UserDetails from "./components/user/UserDetails";

function AppRoutes() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductListPage />} />
      <Route
        path="/products/category/:category"
        element={<ProductListPage />}
      />
      <Route path="/products/:id" element={<ProductDetailsListPage />} />
      <Route path="/account/login" element={<LoginPage />} />
      <Route path="/account/register" element={<RegisterPage />} />
      <Route path="/account" element={<UserInfoPage />} />
      <Route path="/account/details" element={<UserDetails />} />
      <Route path="/order" element={<OrderPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default AppRoutes;

import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { theme } from "./components/theme/theme";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import PageNotFound from "./components/pages/error/NotFound";
import HomePage from "./pages/Home";
import ProductListPage from "./pages/Product";
import ProductDetailsListPage from "./pages/ProductDetails";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import UserInfoPage from "./pages/UserAccount";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductListPage />} />
          <Route path="/products/:name" element={<ProductDetailsListPage />} />
          <Route path="/account/login" element={<LoginPage />} />
          <Route path="/account/register" element={<RegisterPage />} />
          <Route path="/account" element={<UserInfoPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { theme } from "./components/theme/theme";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import ProductList from "./pages/Product";
import ProductDetailsList from "./pages/ProductDetails";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import UserInfoPage from "./pages/UserAccount";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:name" element={<ProductDetailsList />} />
          <Route path="/account/login" element={<LoginPage />} />
          <Route path="/account/register" element={<RegisterPage />} />
          <Route path="/account" element={<UserInfoPage />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;

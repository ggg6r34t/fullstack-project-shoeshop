import { useLocation, Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { theme } from "./components/theme/theme";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import AppRoutes from "./AppRoutes";

function App() {
  const location = useLocation();
  const shouldRender = !["/order"].includes(location.pathname);
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Outlet />
        {shouldRender && <NavBar />}
        <AppRoutes />
        <Outlet />
        {shouldRender && <Footer />}
      </ThemeProvider>
    </div>
  );
}

export default App;

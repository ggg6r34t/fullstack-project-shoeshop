import { ThemeProvider } from "styled-components";

import { theme } from "./components/theme/theme";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import AppRoutes from "./routes";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar />
        <AppRoutes />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;

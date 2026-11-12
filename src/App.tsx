import { useEffect } from "react";
import { BrowserRouter } from "react-router";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./Shared/Theme/theme";
import { useAppSelector } from "./Redux/hooks";
import AppRoutes from "./Routes";

function App() {
  const { language, darkMode } = useAppSelector((state) => state.settings);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "fa" ? "rtl" : "ltr";
  }, [language]);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

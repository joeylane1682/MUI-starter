import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { ApplicationPage } from "./layout/templates/application-page";
import theme from "./theme";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ApplicationPage />
    </ThemeProvider>
  );
}

export default App

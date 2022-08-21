import { createTheme, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard.page";
import Home from "./pages/Home.page";
const theme = createTheme({
  custom: {
    primary: "#21BF73",
    secondary: "#B0EACD",
    light: "#F4F4F6",
    dark: "#2E374F",
    white: "#fff",
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;

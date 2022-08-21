import { colors, createTheme, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard.page";
import Home from "./pages/Home.page";
const theme = createTheme({
  palette: {
    custom: {
      main: "#21BF73",
      light: "#B0EACD",
      dark: "#2E374F",
      contrastText: "#F4F4F6",
    }
  },
  typography: {
    fontFamily: [
      "Plus Jakarta Sans",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
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

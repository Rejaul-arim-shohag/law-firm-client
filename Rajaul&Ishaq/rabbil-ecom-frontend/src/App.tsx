import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import BrandList from "./components/Dashboard/brand/BrandList";
import CategoryList from "./components/Dashboard/category/CategoryList";
import DashIndex from "./components/Dashboard/dashIndex/DashIndex";
import ProductList from "./components/Dashboard/product/ProductList";
import Dashboard from "./pages/Dashboard.page";
import Home from "./pages/Home.page";
const theme = createTheme({
  palette: {
    custom: {
      main: "#21BF73",
      light: "#B0EACD",
      dark: "#2E374F",
      contrastText: "#F4F4F6",
    },
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
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} >
          <Route index element={<DashIndex/>}/>
          <Route path="brand" element={<BrandList/>}/>
          <Route path="category" element={<CategoryList/>}/>
          <Route path="product" element={<ProductList/>}/>
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;

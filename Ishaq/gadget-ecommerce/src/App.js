import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllProductsPage from './pages/AllProducts.page';
import Home from "./pages/Home.page";
import ProductDetailsPage from "./pages/ProductDetails.page";


function App() {
  const queryClient = new QueryClient()
  return (
    <div className="relative">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/details" element={<ProductDetailsPage />} />
            <Route path="/all" element={<AllProductsPage />} />
          </Routes>

        </BrowserRouter>

      </QueryClientProvider>
    </div>

  );
}

export default App;

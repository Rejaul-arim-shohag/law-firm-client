import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.page";
import { QueryClient, QueryClientProvider } from 'react-query';
import ProductDetails from "./components/ProductDetails/ProductDetails";
import ProductDetailsPage from "./pages/ProductDetails.page";


function App() {
  const queryClient = new QueryClient()
  return (
    <div className="relative">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ProductDetailsPage />} />
          </Routes>

        </BrowserRouter>

      </QueryClientProvider>
    </div>

  );
}

export default App;

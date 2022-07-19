import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CookiePolicy from './components/Policy/CookiePolicy';
import LegalDocuments from './components/Policy/LegalDocuments';
import PrivacyPolicy from './components/Policy/PrivacyPolicy';
import ReturnPolicy from './components/Policy/ReturnPolicy';
import TermsConditions from './components/Policy/TermsConditions';
import AllProductsPage from './pages/AllProducts.page';
import Home from "./pages/Home.page";
import ProductDetailsPage from "./pages/ProductDetails.page";
import UtilitiesPage from './pages/Utilities.page';
import '/node_modules/preline/dist/hs-ui.bundle.js'

function App() {
  const queryClient = new QueryClient()
  return (
    <div className="relative">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details" element={<ProductDetailsPage />} />
            <Route path="/all" element={<AllProductsPage />} />
            <Route path='/utilities' element={<UtilitiesPage />}>
              <Route path='terms' element={<TermsConditions />}/>
              <Route path='privacy' element={<PrivacyPolicy />}/>
              <Route path='return' element={<ReturnPolicy />}/>
              <Route path='legal' element={<LegalDocuments />}/>
              <Route path='cookie' element={<CookiePolicy />}/>
            </Route>
          </Routes>

        </BrowserRouter>

      </QueryClientProvider>
    </div>

  );
}

export default App;

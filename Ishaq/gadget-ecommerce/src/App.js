import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registration from './components/Authorization/Authorization';
import CookiePolicy from './components/Policy/CookiePolicy';
import LegalDocuments from './components/Policy/LegalDocuments';
import PrivacyPolicy from './components/Policy/PrivacyPolicy';
import ReturnPolicy from './components/Policy/ReturnPolicy';
import TermsConditions from './components/Policy/TermsConditions';
import AboutPage from './pages/About.page';
import AllProductsPage from './pages/AllProducts.page';
import AuthorizationPage from './pages/Authorization.page';
import ComingSoonPage from './pages/ComingSoon.page';
import ContactPage from './pages/Contact.page';
import Home from "./pages/Home.page";
import NotFoundPage from './pages/NotFound.page';
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
            <Route path="/registration" element={<AuthorizationPage login={false} />} />
            <Route path="/login" element={<AuthorizationPage login />} />
            <Route path="/details" element={<ProductDetailsPage />} />
            <Route path="/all" element={<AllProductsPage />} />
            <Route path='/utilities' element={<UtilitiesPage />}>
              <Route path='terms' index element={<TermsConditions />} />
              <Route path='privacy' element={<PrivacyPolicy />} />
              <Route path='return' element={<ReturnPolicy />} />
              <Route path='legal' element={<LegalDocuments />} />
              <Route path='cookie' element={<CookiePolicy />} />
            </Route>
            <Route path='/aboutUs' element={<AboutPage />} />
            <Route path='/contact' element={<ContactPage/>} />
            <Route path='*' element={<NotFoundPage />} />

          </Routes>

        </BrowserRouter>

      </QueryClientProvider>
    </div>

  );
}

export default App;

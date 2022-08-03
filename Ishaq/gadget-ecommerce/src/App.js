import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Analytics from './components/Dashboard/DashComponents/Analytics';
import Brand from './components/Dashboard/DashComponents/Brand';
import Category from './components/Dashboard/DashComponents/Category';
import Customer from './components/Dashboard/DashComponents/Customer';
import DashHome from './components/Dashboard/DashComponents/DashHome';
import Expense from './components/Dashboard/DashComponents/Expense';
import ExpenseType from './components/Dashboard/DashComponents/ExpenseType';
import Product from './components/Dashboard/DashComponents/Product';
import Purchase from './components/Dashboard/DashComponents/Purchase';
import Return from './components/Dashboard/DashComponents/Return';
import Sell from './components/Dashboard/DashComponents/Sell';
import Stock from './components/Dashboard/DashComponents/Stock';
import Supplier from './components/Dashboard/DashComponents/Supplier';
import CookiePolicy from './components/Miscellaneous/CookiePolicy';
import LegalDocuments from './components/Miscellaneous/LegalDocuments';
import PrivacyPolicy from './components/Miscellaneous/PrivacyPolicy';
import ReturnPolicy from './components/Miscellaneous/ReturnPolicy';
import TermsConditions from './components/Miscellaneous/TermsConditions';
import AboutPage from './pages/About.page';
import AllProductsPage from './pages/AllProducts.page';
import AuthorizationPage from './pages/Authorization.page';
import ComingSoonPage from './pages/ComingSoon.page';
import ContactPage from './pages/Contact.page';
import DashboardPage from './pages/Dashboard.page';
import Home from "./pages/Home.page";
import NotFoundPage from './pages/NotFound.page';
import ProductDetailsPage from "./pages/ProductDetails.page";
import UtilitiesPage from './pages/Utilities.page';
import { ToastContainer } from 'react-toastify';
import '/node_modules/preline/dist/hs-ui.bundle.js';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from "@material-tailwind/react";
import BrandList from './components/Dashboard/DashComponents/Brand/BrandList';

function App() {
  const queryClient = new QueryClient()
  return (
    <div className="relative">
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          <ToastContainer />

          <BrowserRouter>
            <Routes>
              {/* <Route path="/" element={<DashboardPage />} /> */}
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
              <Route path='/contact' element={<ContactPage />} />
              <Route path='/checkout' element={<ComingSoonPage />} />
              <Route path='/dashboard' element={<DashboardPage />}>
                <Route path='dashHome' index element={<DashHome />} />
                <Route path='analytics' element={<Analytics />} />
                <Route path='brand' element={<BrandList />} />
                <Route path='category' element={<Category />} />
                <Route path='customer' element={<Customer />} />
                <Route path='expense' element={<Expense />} />
                <Route path='expense-type' element={<ExpenseType />} />
                <Route path='product' element={<Product />} />
                <Route path='purchase' element={<Purchase />} />
                <Route path='return' element={<Return />} />
                <Route path='sell' element={<Sell />} />
                <Route path='stock' element={<Stock />} />
                <Route path='supplier' element={<Supplier />} />
              </Route>
              <Route path='*' element={<NotFoundPage />} />
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </ThemeProvider>

    </div>

  );
}

export default App;

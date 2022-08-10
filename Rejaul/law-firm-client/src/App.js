import { Fragment } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ContactUsPage from "./Pages/ContactUsPage";
import HomePage from "./Pages/HomePage";
import TeamPage from "./Pages/TeamPage";
import AppointmentPage from "./Pages/AppointmentPage";
import AboutUsPage from "./Pages/AboutUsPage";
import RegistrationPage from "./Pages/RegistrationPage";
import LoginPage from "./Pages/LoginPage";
import DashboardPage from "./Pages/AdminDashboardPages/DashboardPage";
import AttorneyAddPage from "./Pages/AdminDashboardPages/AttorneyAddPage";
import AdminLoginPage from "./Pages/AdminDashboardPages/AdminLoginPage";
import { getAdminToken } from "./Helper/SessionHelper";
import FullscreenLoader from "../src/components/MasterLayout/FullScreenLoader"
import ServicesAddPage from "./Pages/AdminDashboardPages/ServicesAddPage";
import OurPlanAddPage from "./Pages/AdminDashboardPages/OurPlanAddPage";
import UserProtected from "./components/Protected/UserProtected";
import AdminProtect from "./components/Protected/AdminProtect";
import AttorneyReadPage from "./Pages/AdminDashboardPages/AttorneyReadPage";
import AttorneyEditPage from "./Pages/AdminDashboardPages/AttorneyEditPage";
function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route
            path="/appointment"
            element={
              <UserProtected>
                <AppointmentPage />
              </UserProtected>
            }
          />
          <Route path="/aboutUs" element={<AboutUsPage />} />
          <Route path="/sign-up" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />


          {/* admin page */}
          <Route path="/admin-login" element={<AdminLoginPage />} />
          <Route path="/adminDashboard" element={<AdminProtect>
            <DashboardPage />
          </AdminProtect>} />
          <Route path="/AddAtorney" element={<AdminProtect>
            <AttorneyAddPage />
          </AdminProtect>} />
          <Route path="/updateAttorney/:id" element={<AdminProtect>
            <AttorneyEditPage />
          </AdminProtect>} />
          <Route path="/AddOurService" element={<AdminProtect>
            <ServicesAddPage />
          </AdminProtect>} />
          <Route path="/AddOurPlan" element={<AdminProtect>
            <OurPlanAddPage />
          </AdminProtect>} />
          <Route path="/AllAttorney" element={<AdminProtect>
            <AttorneyReadPage />
          </AdminProtect>} />
        </Routes>
      </BrowserRouter>
      <FullscreenLoader />
    </Fragment>
  );


}

export default App;

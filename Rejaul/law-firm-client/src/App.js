import { Fragment } from "react";
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
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
function App() {
  if (getAdminToken()) {
    return (
      <Fragment>
          <BrowserRouter>
            <Routes>
              <Route path="/adminDashboard"  element={<DashboardPage />} />
              <Route path="/AddAtorney" element={<AttorneyAddPage />} />
              <Route path="/AddOurService" element={<ServicesAddPage />} />
              <Route path="/AddOurPlan" element={<OurPlanAddPage />} />

            </Routes>
          </BrowserRouter>
      </Fragment>
    );

  }

  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/adminDashboard" element={<Navigate to="/admin-login" replace />}/>
          <Route path="/" element={<HomePage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/appointment" element={<AppointmentPage />} />
          <Route path="/aboutUs" element={<AboutUsPage />} />
          <Route path="/sign-up" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin-login" element={<AdminLoginPage />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;

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
import ServicesListPage from "./Pages/AdminDashboardPages/ServicesListPage";
import NotFound from "./Pages/NotFound";
import ServiceUpdatePage from "./Pages/AdminDashboardPages/ServiceUpdatePage";
import OurPlanPage from "./Pages/AdminDashboardPages/OurPlanPage";
import UserProfile from "./components/UserProfile/UserProfile";
import DisplayedReviewsPage from "./Pages/AdminDashboardPages/DisplayedReviewsPage";
import PlanUpdatePage from "./Pages/AdminDashboardPages/PlanUpdatePage";
import PracticeAreaDetailPage from "./Pages/PracticeAreaDetailPage";
import OurBlogPage from "./Pages/OurBlogPage";
import SingleBlogPage from "./Pages/SingleBlogPage";
import ChoiceUsListPage from "./Pages/AdminDashboardPages/ChoiceUsListPage";
function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/aboutUs" element={<AboutUsPage />} />
          <Route path="/OurBlogList" element={<OurBlogPage />} />
          <Route path="/blog/:id" element={<SingleBlogPage />} />
          <Route path="/practiceArea/:id" element={<PracticeAreaDetailPage />} />
          <Route path="/sign-up" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/appointment"
            element={
              <UserProtected>
                <AppointmentPage />
              </UserProtected>
            }
          />
          
          <Route
            path="/profile"
            element={
              <UserProtected>
                <UserProfile />
              </UserProtected>
            }
          />

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
          <Route path="/Services-list" element={<AdminProtect>
            <ServicesListPage />
          </AdminProtect>} />
          <Route path="/admin/editService/:id" element={<AdminProtect>
            <ServiceUpdatePage />
          </AdminProtect>} />
          <Route path="/AddOurPlan" element={<AdminProtect>
            <OurPlanAddPage />
          </AdminProtect>} />
          <Route path="/AllAttorney" element={<AdminProtect>
            <AttorneyReadPage />
          </AdminProtect>} />
          <Route path="/our-plans" element={<AdminProtect>
            <OurPlanPage />
          </AdminProtect>} />
          <Route path="/client-reviews" element={<AdminProtect>
            <DisplayedReviewsPage/>
          </AdminProtect>} />
          <Route path="/planEdit/:id" element={<AdminProtect>
            <PlanUpdatePage/>
          </AdminProtect>} />

          <Route path="/whyChoiceUsList" element={<AdminProtect>
            <ChoiceUsListPage/>
          </AdminProtect>} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <FullscreenLoader />
    </Fragment>
  );


}

export default App;

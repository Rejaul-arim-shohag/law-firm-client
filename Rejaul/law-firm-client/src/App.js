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
import WriteBlogPage from "./Pages/WriteBlogPage";
import OurBlogListPage from "./Pages/AdminDashboardPages/OurBlogListPage";
import BlogListPage from "./Pages/AdminDashboardPages/BlogListPage";
import UpdateBlogPage from "./Pages/AdminDashboardPages/UpdateBlogPage";
import SmallServicesPage from "./Pages/AdminDashboardPages/SmallServicesPage";
import AppointmentListPage from "./Pages/AdminDashboardPages/AppointmentListPage";
import AdminProfile from "./components/AdminDashboard/AdminProfile/AdminProfile";
import SettingsPage from "./Pages/AdminDashboardPages/SettingsPage";
import AddressUpdatePage from "./Pages/AdminDashboardPages/AddressUpdatePage";
import AddressInsertPage from "./Pages/AdminDashboardPages/AddressInsertPage";
import TermsAndConditionPage from "./Pages/AdminDashboardPages/TermsAndConditionPage";
import ReadTermsAndConditionPage from "./Pages/AdminDashboardPages/ReadTermsAndConditionPage";
import UpdateTermsAndConditionPage from "./Pages/AdminDashboardPages/UpdateTermsAndConditionPage";
import ReadPrivacyPage from "./Pages/AdminDashboardPages/ReadPrivacyPage";
import CreatePrivacyPage from "./Pages/AdminDashboardPages/CreatePrivacyPage";
import UpdatePrivacYPage from "./Pages/AdminDashboardPages/UpdatePrivacyPage";
import PrivacyAndPolicy from "./Pages/PrivacyAndPolicy";
import OurTermsAndConditionPage from "./Pages/OurTermsAndConditionPage";
import SendOTPPage from "./components/AcountRecovery/Send-OTP-Page";
import VerifyOTPPage from "./components/AcountRecovery/VerifyOTPPage";
import CreatePasswordPage from "./components/AcountRecovery/CreatePasswordPage";


function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/aboutUs" element={<AboutUsPage />} />
          <Route path="/OurBlog" element={<OurBlogPage />} />
          <Route path="/blog/:id" element={<SingleBlogPage />} />
          <Route path="/practiceArea/:id" element={<PracticeAreaDetailPage />} />
          <Route path="/sign-up" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/appointment" element={<AppointmentPage />} />
          <Route path="/privacyAndPolicy" element={<PrivacyAndPolicy />} />
          <Route path="/termsAndConditions" element={<OurTermsAndConditionPage />} />
          <Route path="/SendOTP" element={<SendOTPPage />} />
          <Route path="/VerifyOTP" element={<VerifyOTPPage />} />
          <Route path="/CreatePassword" element={<CreatePasswordPage />} />
          <Route
            path="/profile"
            element={
              <UserProtected>
                <UserProfile />
              </UserProtected>
            }
          />

          {/* admin page */}
          <Route path="/allSettings" element={<AdminProtect>
            <SettingsPage />
          </AdminProtect>} />
          <Route path="/insertAddress" element={<AdminProtect>
            <AddressInsertPage />
          </AdminProtect>} />
          <Route path="/addressUpdate" element={<AdminProtect>
            <AddressUpdatePage />
          </AdminProtect>} />
          <Route path="/TermsAndCondition" element={<AdminProtect>
            <TermsAndConditionPage />
          </AdminProtect>} />
          <Route path="/readTermsAndCondition" element={<AdminProtect>
            <ReadTermsAndConditionPage />
          </AdminProtect>} />
          <Route path="/UpdateTermsAndCondition/:id" element={<AdminProtect>
            <UpdateTermsAndConditionPage />
          </AdminProtect>} />

          <Route path="/OurPrivacy" element={<AdminProtect>
            <ReadPrivacyPage />
          </AdminProtect>} />

          <Route path="/createPrivacy" element={<AdminProtect>
            <CreatePrivacyPage />
          </AdminProtect>} />

          <Route path="/UpdatePrivacy/:id" element={<AdminProtect>
            <UpdatePrivacYPage />
          </AdminProtect>} />




          <Route path="/admin-login" element={<AdminLoginPage />} />
          <Route path="/adminDashboard" element={<AdminProtect>
            <DashboardPage />
          </AdminProtect>} />
          <Route path="/AppointmentList" element={<AdminProtect>
            <AppointmentListPage />
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
            <DisplayedReviewsPage />
          </AdminProtect>} />
          <Route path="/planEdit/:id" element={<AdminProtect>
            <PlanUpdatePage />
          </AdminProtect>} />

          <Route path="/whyChoiceUsList" element={<AdminProtect>
            <ChoiceUsListPage />
          </AdminProtect>} />
          <Route path="/blogList" element={<AdminProtect>
            <OurBlogListPage />
          </AdminProtect>} />
          <Route path="/createBlog" element={<AdminProtect>
            <WriteBlogPage />
          </AdminProtect>} />

          <Route path="/blogList" element={<AdminProtect>
            <BlogListPage />
          </AdminProtect>} />

          <Route path="/updateBlog/:id" element={<AdminProtect>
            <UpdateBlogPage />
          </AdminProtect>} />

          <Route path="/Utilities" element={<AdminProtect>
            <SmallServicesPage />
          </AdminProtect>} />

          <Route path="/adminProfile" element={<AdminProtect>
            <AdminProfile />
          </AdminProtect>} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <FullscreenLoader />
    </Fragment>
  );


}

export default App;

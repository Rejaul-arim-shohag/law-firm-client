import { Fragment } from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import ContactUsPage from "./Pages/ContactUsPage";
import HomePage from "./Pages/HomePage";
import TeamPage from "./Pages/TeamPage";
import AppointmentPage from "./Pages/AppointmentPage";
import AboutUsPage from "./Pages/AboutUsPage";
import RegistrationPage from "./Pages/RegistrationPage";
import LoginPage from "./Pages/LoginPage";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/appointment" element={<AppointmentPage/>} />
          <Route path="/aboutUs" element={<AboutUsPage/>} />
          <Route path="/sign-up" element={ <RegistrationPage/>} />
          <Route path="/login" element={ <LoginPage/>} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;

import React, {Fragment} from 'react';

// Page Include
import Home from "./page/home/Home";
import About from "./page/about/About";
import Courses from "./page/courses/Courses";
import Contact from "./page/contact/Contact";
import Join from "./page/join/Join";
import Mentor from "./page/mentor/Mentor";
import SignUp from "./page/signup/SignUp";

import CoursesPageOne from "./page/courses-1/CoursesPageOne";
import CoursesPageTwo from "./page/courses-2/CoursesPageTwo";

// Component Include
import Footer from "./components/footer/Footer";
import AppNavbar from "./components/navbar/AppNavbar";

// Include Style
import './assets/app.css';

// React Router
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <Fragment>
            <AppNavbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/courses" element={<Courses/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/join" element={<Join/>}/>
                <Route path="/mentor" element={<Mentor/>}/>
                <Route path="/signup" element={<SignUp/>}/>

                <Route path="/courses-page-one" element={<CoursesPageOne/>}/>
                <Route path="/courses-page-two" element={<CoursesPageTwo/>}/>
            </Routes>
            <Footer/>
        </Fragment>
    );
}

export default App;
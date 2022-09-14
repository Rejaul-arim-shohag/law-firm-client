import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import PracticeArea from '../components/PracticeArea/PracticeArea';
import Contact from "../components/Contact/Contact"
import PracticeAreaDetail from '../components/PracticeAreaDetail/PracticeAreaDetail';
import Footer from "../components/Footer/Footer"
const PracticeAreaDetailPage = () => {
    
    return (
        <>
            <NavBar />
            <PracticeAreaDetail />
            <PracticeArea />
            <Contact/>
            <Footer/>
        </>
    );
};

export default PracticeAreaDetailPage;
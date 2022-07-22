import React from 'react';
import Footer from '../components/Footer/Footer';
import NavBar from '../components/NavBar/NavBar';
import OurTeam from '../components/OurTeam/OurTeam';
import TeamHeroSection from '../components/TeamHeroSection/TeamHeroSection';

const TeamPage = () => {
    return (
        <div>
            <NavBar/>
            <TeamHeroSection/>
            <OurTeam/>
            <Footer/>
        </div>
    );
};

export default TeamPage;
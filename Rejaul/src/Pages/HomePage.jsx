import React from 'react';
import HeroSection from '../components/HeroSection/HeroSection';
import PracticeArea from '../components/PracticeArea/PracticeArea';
import TopRecomendaton from '../components/TopRecomendatons/TopRecomendaton';

const HomePage = () => {
    return (
        <div>
           <HeroSection/>
           <TopRecomendaton/>
           <PracticeArea/>
        </div>
    );
};

export default HomePage;
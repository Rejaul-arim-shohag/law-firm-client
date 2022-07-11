import React, {Component, Fragment} from 'react';

// Include Component
import AppNavbar from "../../components/navbar/AppNavbar";
import Hero from "../../components/hero/Hero";
import TopRecomendations from "../../components/top_recomendations/TopRecomendations";
import WhyChooseUs from "../../components/why_choose_us/WhyChooseUs";

// Include Style
import './home.css';

class Home extends Component {
    render() {
        return (
            <Fragment>
                <AppNavbar/>
                <Hero/>
                <TopRecomendations/>
                <WhyChooseUs/>
            </Fragment>
        );
    }
}

export default Home;
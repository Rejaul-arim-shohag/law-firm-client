import React, {Component, Fragment} from 'react';

// Include Component
import AppNavbar from "../../components/navbar/AppNavbar";
import Hero from "../../components/hero/Hero";
import TopRecomendations from "../../components/top_recomendations/TopRecomendations";

// Include Style
import './home.css';

class Home extends Component {
    render() {
        return (
            <Fragment>
                <AppNavbar/>
                <Hero/>
                <TopRecomendations/>
            </Fragment>
        );
    }
}

export default Home;
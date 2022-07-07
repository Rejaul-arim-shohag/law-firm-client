import React, {Component, Fragment} from 'react';
import AppNavbar from "../../components/navbar/AppNavbar";

// Include Style
import './about.css';

class About extends Component {
    render() {
        return (
            <Fragment>
                <AppNavbar/>
                <h2> About </h2>
            </Fragment>
        );
    }
}

export default About;
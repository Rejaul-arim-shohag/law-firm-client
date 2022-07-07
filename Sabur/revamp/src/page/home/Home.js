import React, {Component, Fragment} from 'react';
import AppNavbar from "../../components/navbar/AppNavbar";

// Include Style
import './home.css';

class Home extends Component {
    render() {
        return (
            <Fragment>
                <AppNavbar/>
            </Fragment>
        );
    }
}

export default Home;
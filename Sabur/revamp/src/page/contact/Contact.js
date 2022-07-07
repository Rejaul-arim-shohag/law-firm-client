import React, {Component, Fragment} from 'react';
import AppNavbar from "../../components/navbar/AppNavbar";

// Include Style
import './contact.css';

class Contact extends Component {
    render() {
        return (
            <Fragment>
                <AppNavbar/>
                <h2> Contact </h2>
            </Fragment>
        );
    }
}

export default Contact;
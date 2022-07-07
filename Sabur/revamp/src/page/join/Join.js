import React, {Component, Fragment} from 'react';
import AppNavbar from "../../components/navbar/AppNavbar";

// Include Style
import './join.css';

class Join extends Component {
    render() {
        return (
            <Fragment>
                <AppNavbar/>
                <h2> Join </h2>
            </Fragment>
        );
    }
}

export default Join;
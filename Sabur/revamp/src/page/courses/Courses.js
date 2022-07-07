import React, {Component, Fragment} from 'react';
import AppNavbar from "../../components/navbar/AppNavbar";

// Include Style
import './courses.css';

class Courses extends Component {
    render() {
        return (
            <Fragment>
                <AppNavbar/>
                <h2> Courses </h2>
            </Fragment>
        );
    }
}

export default Courses;
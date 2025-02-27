import React from "react";
import {Navbar, Container} from 'react-bootstrap';
import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import '../App.css';
import MyNavbar from "../components/navbar";

function Contact()
{
    return (
        <>
        <MyNavbar/>

        <div className="contact">
            <h1>Contact Us</h1>
            <h2>Email: admin@gmail.com</h2>
            <h2>Phone: 98546*****</h2>
        </div>
        </>
    )
}

export default Contact;
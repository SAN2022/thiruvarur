import React from "react";
import {Navbar, Container} from 'react-bootstrap';
import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faDroplet, faHome, faPhoneSquareAlt } from "@fortawesome/free-solid-svg-icons";
import '../App.css';

function MyNavbar()
{
    return (
        <>
        {/* <Navbar className='navbar navbar-inverse'>
        <div className='navbar-header'>Explore Now</div>
            <ul className='nav navbar-nav navbar-right'>
                <li className="active">
                    <Link to='/'><FontAwesomeIcon icon={faHome} className='fa-icons'/>Home</Link>
                </li>
                <li>
                    <Link to='/about'><FontAwesomeIcon icon={faDroplet} className='fa-icons'/>About</Link>
                </li>
            </ul>
        </Navbar>     */}

        <Navbar className="navbar navbar-inverse bg-light text-black">
            <Container>
            <div className="col-md-12">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">Explore Now</a>
                </div>

                {/* <div className="navbar-header maintenance">
                        <p className="blink">Our Website is under maintenance</p>
                </div> */}

                <ul className="nav navbar-nav navbar-right">
                    <li className="active">
                        <Link to='/'><FontAwesomeIcon icon={faHome} className='fa-icons'/> Home</Link>
                    </li>
                    <li>
                        <Link to='/about'><FontAwesomeIcon icon={faDroplet} className='fa-icons'/> About</Link>
                    </li>
                    <li>
                        <Link to='/contact'><FontAwesomeIcon icon={faPhoneSquareAlt} className='fa-icons'/> Contact Us</Link>
                    </li>
                </ul>
                </div>
                </Container>
        </Navbar>
        </>
    )
}

export default MyNavbar;
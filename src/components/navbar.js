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

            {/* <nav class="navbar navbar-expand-lg bg-body-tertiary fs-5 py-0">
            <div class="container">
                <a class="navbar-brand" href="#">Thiruvarur</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">About</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Contact Us</a>
                    </li>
                </ul>
                </div>
            </div>
            </nav> */}

    

    <nav className="navbar navbar-expand-lg bg-body-tertiary fs-4">
    <div className="container">
      <a className="navbar-brand fs-4" href="#">Navbar</a>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          

          {/* <Link to='/Schools'>  
            <li><FontAwesomeIcon icon={faArrowRight}/> Schools</li>
            </Link> */}

          <li className="nav-item">
            <Link to='/'>
              <a className="nav-link active" aria-current="page" href="#home">Home</a>
            </Link>
          </li>

          <li className="nav-item">
            <Link to='/About'>
              <a className="nav-link">About</a>
            </Link>
          </li>

          <li className="nav-item"> 
            <Link to='/Contact'>
              <a className="nav-link">Contact</a>
            </Link>
          </li>
        
        </ul>
      </div>
    </div>
  </nav>

        {/* <Navbar className="navbar navbar-inverse bg-light text-black">
            <Container>
            <div className="col-md-12">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">Explore Now</a>
                </div>

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
        </Navbar> */}
        </>
    )
}

export default MyNavbar;
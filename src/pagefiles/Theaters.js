import React, { useEffect } from "react";
import { useState } from "react";
import '../index.css';
import MyNavbar from "../components/navbar";
import NavDetails from "./Details/NavDetails";

import thailammai from '../images/Theatres/thailammai.gif'
import natesh from '../images/Theatres/natesh.jpg'

function Theatres()
{
    const [theatres, setTheatres] = useState([]);
    const [currentTheater, setCurrentTheater] = useState([])

    const images = [thailammai, natesh]
    const [theatersImages, setTheatersImages] = useState()

    console.log(theatres)
    
    useEffect(()=>
    {
        fetch('http://localhost:3004/Theaters')
        .then(res => res.json())
        .then(res => setTheatres(res))
    },[])

    // let theatre_1 = () => (
    //     <div className="vs-boys">
    //         <section className="vs-boys-img"></section>
    //         <h1>Page 1</h1>
    //         <h1>VS BOYS HR SEC SCHOOL</h1>
    //         <h3>Phone: </h3>
    //         <h3>Address: </h3>

    //         <div className="links">

    //         </div>
    //     </div>
    // )
    
    // let theatre_2 = () => (
    //     <div className="veludayar">
    //         <section className="veludayar-img"></section>
    //         <h1>Page 2</h1>
    //         <h1>VELUDAYAR BOYS HR SEC SCHOOL</h1>
    //         <h3>Phone: </h3>
    //         <h3>Address: </h3>
            
    //         <div className="links">

    //         </div>
    //     </div>
    // )

    // let theatre_3 = () => (
    //     <div className="sairam">
    //         <section className="sairam-img"></section>
    //         <h1>Page 3</h1>
    //         <h1>SAIRAM MATRICULATION HIGHER SECONDARY SCHOOL</h1>
    //         <h3>Phone: </h3>
    //         <h3>Address: </h3>
            
    //         <div className="links">

    //         </div>
    //     </div>
    // )

    // let theatre_4 = () => (
    //     <div className="grm">
    //         <section className="grm-img"></section>
    //         <h1>Page 4</h1>
    //         <h1>SRI GRM GIRLS HIGHER SECONDARY SCHOOL</h1>
    //         <h3>Phone: </h3>
    //         <h3>Address: </h3>
            
    //         <div className="links">

    //         </div>
    //     </div>
    // )

    // let theatre_5 = () => (
    //     <div className="fathima">
    //         <section className="fathima-img"></section>
    //         <h1>Page 5</h1>
    //         <h1>RC FATHIMA MATRICULATION SCHOOL</h1>
    //         <h3>Phone: <i className="fa fa-phone"></i>tel:+914366242517</h3>
    //         <h3>Address: </h3>
            
    //         <div className="links">

    //         </div>
    //     </div>
    // )

    // let theatre_6 = () => (
    //     <div className="kasturba">
    //         <section className="kasturba-img"></section>
    //         <h1>Page 6</h1>
    //         <h1>KASTURBA GANDHI MATRICULATION HIGHER SECONDARY SCHOOL</h1>
    //         <h3>Phone: </h3>
    //         <h3>Address: </h3>
            
    //         <div className="links">

    //         </div>
    //     </div>
    // )

    const handleTheatreClick = (id) =>
    {
        console.log(id)

        console.log(setTheatersImages(images[id]))

        setCurrentTheater(theatres[id])
        console.log(currentTheater)
    }

// THAILAMMAI
// Address: 32, Thanjai Salai, Vasan Nagar, KTR Nagar, Thiruvarur, Tamil Nadu 610003
// Book Tickets: https://paytm.com/movies/thiruvarur/thailammai-cinemas-a-c-4k-dolby-atmos-ktr-nagar-c/10269

// NATESH
// Address: 165H, Natesh Cinemas, Nethaji Rd, near Ramanujan arch, Thiruvarur, Tamil Nadu 610001
// Book tickets: https://paytm.com/movies/thiruvarur/natesh-cinemas-a-c-4k-dolby-atmos-c/28576

// CHOLA
// Address: QJ9M+FX6, Santhamangalam, Madappuram, Thiruvarur, Tamil Nadu 610001
// Phone: 084385 84385

return(
        <>
            <MyNavbar/>

        <div className="container-fluid theatres">

            <h1>Theatres</h1>
            <hr/>

            <div className="col-md-4">
            <div className="list-group">
                <a href="#" className="list-group-item theatre-head">Theatres</a>
                <a href="#" className="list-group-item" onClick={e => handleTheatreClick(0)}>THAILAMMAI CINEMAS A/C 4K DOLBY ATMOS</a>
                <a href="#" className="list-group-item" onClick={e => handleTheatreClick(1)}>NATESH CINEMAS AC 3D DOLBY ATMOS</a>
                <a href="#" className="list-group-item" onClick={e => handleTheatreClick(2)}>CHOLA DTS</a>
            </div>
            </div>

            <div className="col-md-8" id="s1">

            {/* <h1>Page</h1> */}

            <NavDetails {...currentTheater} imgs={theatersImages}/>

            </div>
        </div>
        </>
    );
}

export default Theatres;
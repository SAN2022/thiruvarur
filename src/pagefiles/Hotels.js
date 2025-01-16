import React, { useEffect, useState } from "react";
import '../index.css';
import MyNavbar from "../components/navbar";
import NavDetails from "./Details/NavDetails";

import kasis from '../images/Hotels-Images/kasis.jpg';
import mma from '../images/Hotels-Images/mma.jpg';
import selvies from '../images/Hotels-Images/selvies.jpg';
import seven_hills from '../images/Hotels-Images/seven-hills.jpg';
import sri_meenakshi from '../images/Hotels-Images/sri-meenakshi.jpg';
import sudarshan from '../images/Hotels-Images/sudarshan.jpg';
import thailammai from '../images/Hotels-Images/thailammai.png';

function Hotels()
{
    const [hotels, setHotels] = useState([]);
    const [currentHotel, setCurrentHotel] = useState([]);

    console.log(hotels)
    
    const images = [selvies, mma, kasis, sudarshan, seven_hills, sri_meenakshi, thailammai]
    const [hotelsImages, setHotelsImages] = useState([])

    useEffect(()=>
    {
        fetch('http://localhost:3004/hotels')
        .then(res => res.json())
        .then(res => setHotels(res))
    },[])

    // let hotel_1 = () => (
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
    
    // let hotel_2 = () => (
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

    // let hotel_3 = () => (
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

    // let hotel_4 = () => (
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

    // let hotel_5 = () => (
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

    // let hotel_6 = () => (
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

    const handleHotelClick = (id) =>
    {
        console.log(id)
        console.log(typeof(e))

        console.log(setHotelsImages(images[id]))

        setCurrentHotel(hotels[id])
        console.log(currentHotel)
        
    }
    
// Selvies
// Address: NO 2, KATTUKARA STREET, Santhamangalam, Madappuram, Thiruvarur, Tamil Nadu 610001
// Phone: 04366 222 081
// Web: https://www.hotelselvies.com/

// MMA
// Address: 364, 3, Dr, Mannargudi Rd, Kalaignar Nagar, Vilamal, Thiruvarur, Tamil Nadu 610001
// Phone: 098948 15469
// Web - http://hotelmma.com/

// KASI’S INN
// Address: 91, 25A, THILAGAR 2ND STREET BYE PASS ROAD, Tamil Nadu 610001
// Phone: 099433 20210
// Web - http://www.hotelkasis.com/

// SUDHARASAN
// Address:  South Madavilagam, Vasan Nagar, Madappuram, Thiruvarur, Tamil Nadu 610001
// Phone: 099429 84938


// SEVEN HILLS
// Address: No-5B , Anna Sadhukkam Opp Indian Oil Petrol Bunk, Tamil Nadu 610001
// Phone: 098651 66477
// Web - http://www.sevenhillsresidency.com/

// SRI MEENAKSHI
// Address: No: 211, Anna Salai, near Old Railway Station, Vijayapuram, Thiruvarur, Tamil Nadu 610004

// THAILAMMAI
// Address: Santhamangalam, Thiruvarur, Tamil Nadu

    return(
        <>
            <MyNavbar/>

        <div className="container-fluid hotels">

            <h1>Hotels/Residencies</h1>
            <hr/>
            <div className="col-md-4">
            <div className="list-group">
                <a href="#" className="list-group-item hotel-head">Hotels/Residencies</a>
                <a href="#" className="list-group-item" onClick={e => handleHotelClick(0)}>HOTEL SELVIES</a>
                <a href="#" className="list-group-item" onClick={e => handleHotelClick(1)}>HOTEL MMA THIRUVARUR</a>
                <a href="#" className="list-group-item" onClick={e => handleHotelClick(2)}>HOTEL KASI'S INN</a>
                <a href="#" className="list-group-item" onClick={e => handleHotelClick(3)}>SUDARSHAN COMPLEX HOTEL</a>
                <a href="#" className="list-group-item" onClick={e => handleHotelClick(4)}>SEVEN HILLS RESIDENCY</a>                
                <a href="#" className="list-group-item" onClick={e => handleHotelClick(5)}>SRI MEENAKSHI KRISHNA LODGE</a>
                <a href="#" className="list-group-item" onClick={e => handleHotelClick(6)}>THAILAMMAI INN BOARDING AND LODGING</a>
            </div>
            </div>

            <div className="col-md-8" id="s1">

            {/* <h1>Page</h1> */}

            <NavDetails {...currentHotel} imgs={hotelsImages}/>

            </div>
        </div>
        </>
    );
}

export default Hotels;
import React, { useEffect } from "react";
import { useState } from "react";
import '../index.css';
import MyNavbar from "../components/navbar";
import NavDetails from "./Details/NavDetails";

import medicalclg from '../images/Hospitals-Images/medicalclg.jpg';
import tmc from '../images/Hospitals-Images/tmc.jpg';
import dm from '../images/Hospitals-Images/dm.jpg';
import kumaraguru from '../images/Hospitals-Images/kumaraguru.jpg';
import lakshana from '../images/Hospitals-Images/lakshana.jpg';
import navajeevan from '../images/Hospitals-Images/navajeevan.jpg';
import parvathi from '../images/Hospitals-Images/parvathi.jpg';
import sri_jeyam from '../images/Hospitals-Images/sri-jeyam.jpg';
import surya from '../images/Hospitals-Images/surya.jpg';
import venkateswara from '../images/Hospitals-Images/venkateswara.jpg';
import vs from '../images/Hospitals-Images/vs.jpg';

function Hospitals()
{
    const [hospitals, setHospitals] = useState([]);
    const [currentHospital, setCurrentHospital] = useState([]);

    console.log(hospitals)
    

    const images = [medicalclg, '', '', tmc, venkateswara, vs, parvathi, lakshana, surya, navajeevan, sri_jeyam, dm, kumaraguru];
    const [hospitalsImages, setHospitalsImages] = useState()


    useEffect(()=>
    {
        fetch('http://localhost:3004/Hospitals')
        .then(res => res.json())
        .then(res => setHospitals(res))
    },[])

    // let hospital_1 = () => (
    //     <div className="vs-boys">
    //         <section className="vs-boys-img"></section>
    //         <h1>Page 1</h1>
    //         <h1></h1>
    //         <h3>Phone: </h3>
    //         <h3>Address: </h3>

    //         <div className="links">

    //         </div>
    //     </div>
    // )
    
    // let hospital_2 = () => (
    //     <div className="veludayar">
    //         <section className="veludayar-img"></section>
    //         <h1>Page 2</h1>
    //         <h1></h1>
    //         <h3>Phone: </h3>
    //         <h3>Address: </h3>
            
    //         <div className="links">

    //         </div>
    //     </div>
    // )

    // let hospital_3 = () => (
    //     <div className="sairam">
    //         <section className="sairam-img"></section>
    //         <h1>Page 3</h1>
    //         <h1></h1>
    //         <h3>Phone: </h3>
    //         <h3>Address: 100, Anna Salai Rd Santhamangalam, Anna Salai Rd, Santhamangalam, Vijayapuram, Thiruvarur, Tamil Nadu 610003</h3>
    //         <span>Hours: Open 24 hours</span>

    //         <div className="links">

    //         </div>
    //     </div>
    // )

    // let hospital_4 = () => (
    //     <div className="grm">
    //         <section className="grm-img"></section>
    //         <h1>Page 4</h1>
    //         <h1></h1>
    //         <h3>Phone: </h3>
    //         <h3>Address: </h3>
            
    //         <div className="links">

    //         </div>
    //     </div>
    // )

    // let hospital_5 = () => (
    //     <div className="fathima">
    //         <section className="fathima-img"></section>
    //         <h1>Page 5</h1>
    //         <h1></h1>
    //         <h3>Phone: <i className="fa fa-phone"></i>tel:+914366242517</h3>
    //         <h3>Address: </h3>
            
    //         <div className="links">

    //         </div>
    //     </div>
    // )

    // let hospital_6 = () => (
    //     <div className="kasturba">
    //         <section className="kasturba-img"></section>
    //         <h1>Page 6</h1>
    //         <h1></h1>
    //         <h3>Phone: </h3>
    //         <h3>Address: </h3>
            
    //         <div className="links">

    //         </div>
    //     </div>
    // )

    const handleHospitalClick = (id) =>
    {
        console.log(id)

        console.log(setHospitalsImages(images[id]))

        setCurrentHospital(hospitals[id])
        console.log(currentHospital)

    }

//Medical
// Address: QJG4+633, Collector office Master Plan Complex, Thandalai, Tamil Nadu 610004
// Phone: 04366 220 040
// Founded: 2010
// Total enrollment: 227 (2021)
//Web - http://www.tmctvr.ac.in/tmctvr/
//Mail - deantvr@tn.gov.in

// Govt hospital
// Address: QJ7R+HWC, Vijayapuram, Thiruvarur, Tamil Nadu 610003
// Phone: 097911 48054

// Women & child
// Address: 100, Anna Salai Rd Santhamangalam, Anna Salai Rd, Santhamangalam, Vijayapuram, Thiruvarur, Tamil Nadu 610003
// Hours: 
// Saturday	Open 24 hours
// Sunday	Open 24 hours
// Monday	Open 24 hours
// Tuesday	Open 24 hours
// Wednesday	Open 24 hours
// Thursday	Open 24 hours
// Friday	Open 24 hours
// Suggest new hours

// TMC
// Address: Javulikkara Street, near temple tank, Suriyan Kulam Then Kari, Vasan Nagar, Madappuram, Thiruvarur, Tamil Nadu 610001
// Areas served: Thanjavur and nearby areas
// Hours: 
// Saturday	Open 24 hours
// Sunday	Open 24 hours
// Monday	Open 24 hours
// Tuesday	Open 24 hours
// Wednesday	Open 24 hours
// Thursday	Open 24 hours
// Friday	Open 24 hours
// Suggest new hours
// Phone: 075500 45678

// Venkteswara
// Address: QJGH+89H, Swamy Mada St, Madappuram, Thiruvarur, Tamil Nadu 610001
// Hours: 
// Saturday	Open 24 hours
// Sunday	Open 24 hours
// Monday	Open 24 hours
// Tuesday	Open 24 hours
// Wednesday	Open 24 hours
// Thursday	Open 24 hours
// Friday	Open 24 hours
// Suggest new hours
// Phone: 097500 28115

// VS
// Address: D.no:47, Pidari Koil Street, Thiruvarur, Tamil Nadu 610001
// Hours: 
// Saturday	8am–9pm
// Sunday	8am–9pm
// Monday	8am–9pm
// Tuesday	8am–9pm
// Wednesday	8am–9pm
// Thursday	8am–9pm
// Friday	8am–9pm
// Suggest new hours

// Parvathi
// Address: QJGH+MGQ, SH 65, Madappuram, Thiruvarur, Tamil Nadu 610001
// Hours: 
// Saturday	Open 24 hours
// Sunday	Open 24 hours
// Monday	Open 24 hours
// Tuesday	Open 24 hours
// Wednesday	Open 24 hours
// Thursday	Open 24 hours
// Friday	Open 24 hours
// Suggest new hours
// Phone: 04366 242 236
//Web - https://parvathyhospital.com/

// Lakshana
// Address: QJGH+6F5, SH 65, Madappuram, Thiruvarur, Tamil Nadu 610001
// Hours: 
// Saturday	Open 24 hours
// Sunday	Open 24 hours
// Monday	Open 24 hours
// Tuesday	Open 24 hours
// Wednesday	Open 24 hours
// Thursday	Open 24 hours
// Friday	Open 24 hours
// Suggest new hours
// Phone: 04366 240 210

// Surya
// Address: 23, Javulikkara Street, Madappuram, Thiruvarur, Tamil Nadu 610001
// Hours: 
// Saturday	Open 24 hours
// Sunday	9am–9pm
// Monday	Open 24 hours
// Tuesday	Open 24 hours
// Wednesday	Open 24 hours
// Thursday	Open 24 hours
// Friday	Open 24 hours
// Suggest new hours
// Phone: 04366 242 447

// Navajeevan
// Address: QJH5+RX3, Vilamal, Thiruvarur, Tamil Nadu 610004
// Hours: 
// Saturday	Open 24 hours
// Sunday	Open 24 hours
// Monday	Open 24 hours
// Tuesday	Open 24 hours
// Wednesday	Open 24 hours
// Thursday	Open 24 hours
// Friday	Open 24 hours
// Suggest new hours
// Phone: 095970 35108
//Web - http://navajeevanhospital.com/

// Sri Jeyam
// Address: Valavaikal, Thiruvarur, NH-67, Nagapattinam Coimbatore Gundlupet Highway, Thiruvarur, Thiruvarur, 610003
// Hours: 
// Saturday	Open 24 hours
// Sunday	Open 24 hours
// Monday	Open 24 hours
// Tuesday	Open 24 hours
// Wednesday	Open 24 hours
// Thursday	Open 24 hours
// Friday	Open 24 hours
// Suggest new hours
// Phone: 04366 251 132

// DM
// Address: Bus Stop, Durgalaya Rd, Madappuram, Thiruvarur, Tamil Nadu 610001
// Hours: 
// Saturday	Open 24 hours
// Sunday	Open 24 hours
// Monday	Open 24 hours
// Tuesday	Open 24 hours
// Wednesday	Open 24 hours
// Thursday	Open 24 hours
// Friday	Open 24 hours
// Suggest new hours

// Kumaraguru
// Vilamal, Thiruvarur, Sh202, Mannargudi Muthupet Road, Tiruvarur City, Tiruvarur - 610001 (Map)Hospitals
// Today Open 24 Hrs
// +91 9751099488

    return(
        <>
            <MyNavbar/>

        <div className="container hospitals py-4 px-4">
            <div className="row fs-4">
            <h1>Hospitals</h1>
            <hr/>
            <div className="col-md-4">
            <div className="govt-hospitals list-group">
                <a href="" className="list-group-item hospital-head">Government Hospitals</a>
                <a href="#" className="list-group-item" onClick={e => handleHospitalClick(0)}>GOVERNMENT MEDICAL COLLEGE HOSPITAL</a>
                <a href="#" className="list-group-item" onClick={e => handleHospitalClick(1)}>GOVERNMENT HOSPITAL</a>
                <a href="#" className="list-group-item" onClick={e => handleHospitalClick(2)}>GOVERNMENT WOMEN AND CHILDREN HOSPITAL</a>
            </div>
            <br/>

            <div className="private-hospitals list-group">
                <a href="#" className="list-group-item hospital-head">Private Hospitals</a>
                <a href="#" className="list-group-item" onClick={e => handleHospitalClick(3)}>TMC HOSPITAL</a>
                <a href="#" className="list-group-item" onClick={e => handleHospitalClick(4)}>VENKATESWARA HOSPITAL</a>
                <a href="#" className="list-group-item" onClick={e => handleHospitalClick(5)}>V.S HOSPITAL</a>
                <a href="#" className="list-group-item" onClick={e => handleHospitalClick(6)}>PARVATHI HOSPITAL</a>
                <a href="#" className="list-group-item" onClick={e => handleHospitalClick(7)}>LAKSHANA HOSPITAL</a>                
                <a href="#" className="list-group-item" onClick={e => handleHospitalClick(8)}>SURYA HOSPITAL</a>
                <a href="#" className="list-group-item" onClick={e => handleHospitalClick(9)}>NAVA JEEVAN HOSPITAL</a>
                <a href="#" className="list-group-item" onClick={e => handleHospitalClick(10)}>SRI JEYAM HOSPITAL</a>
                <a href="#" className="list-group-item" onClick={e => handleHospitalClick(11)}>DM HOSPITAL</a>
                <a href="#" className="list-group-item" onClick={e => handleHospitalClick(12)}>KUMARAGURU HOSPITAL</a>
            </div>
            </div>

            <div className="col-md-8" id="s1">

            {/* <h1>Page</h1> */}

            <NavDetails {...currentHospital} imgs={hospitalsImages}/>
            
            </div>
            </div>
        </div>
        </>
    );
}

export default Hospitals;
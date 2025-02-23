import React from "react";
import { useState,useEffect } from "react";
import '../index.css';
import MyNavbar from "../components/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row } from "react-bootstrap";
import NavDetails from "./Details/NavDetails";

import trinity from './../images/Schools-Images/trinity.jpg'
import vsbhs from './../images/Schools-Images/vsbhs.jpg'
import veludayar from './../images/Schools-Images/veludayar.jpg'
import sairam from './../images/Schools-Images/sairam.jpg'
import grm from './../images/Schools-Images/grm.jpg'
import fathima from './../images/Schools-Images/fathima.jpg'
import kasturba from './../images/Schools-Images/kasturba.jpg'
import bharath from './../images/Schools-Images/bharath.jpg'

function Schools()
{
    const [schools, setSchools] = useState([]);
    const [currentSchool, setCurrentSchool] = useState([]);
    const [handleToggleClick, setHandleToggleClick] = useState(false)
    // var currentSchool = [];

    // console.log(currentSchool)
    const images = [trinity, '', '', vsbhs, veludayar, sairam, grm, fathima, kasturba, bharath]
    const [schoolsImages, setSchoolsImages] = useState()

    // console.log(typeof(currentSchool))

    // const [cbseSchools, setCbseSchools] = useState([]);
    // const [govtSchools, setGovtSchools] = useState([]);
    // const [privateSchools, setPrivateSchools] = useState([]);

    // console.log(schools.id)
    // console.log(typeof(schools))

    useEffect(() =>
    {
        // fetch('https://san2022.github.io/API/db.json/schools')
        fetch('https://exultant-joyous-sherbet.glitch.me/schools') 
        .then(res => res.json())
        .then(res => {
            setSchools(res)
            // setCurrentSchool(schools[0])
            // setCbseSchools(res[0])
            // setGovtSchools(res[1])
            // setPrivateSchools(res[2])
        })
    },[])

    console.log(schools)
    // console.log(typeof(schools))

    // Trinity - K.T.R.Trust, By Pass Road, Tamil Nadu 610001
    // Hours: 
    // Wednesday	9am–6pm
    // Thursday	9am–6pm
    // Friday	12am–6pm, 9pm–12am
    // Saturday	12am–6pm
    // Sunday	Closed
    // Monday	9am–6pm
    // Tuesday	9am–6pm
    // Phone: 04366 251 252

    // Govt Kattur - Thiruvarur - Kodavasal - Kumbakonam Road, Kattur, Tamil Nadu 610104

    //Senthamangalam ,SH-23,Thiruvarur - 601001

    //Kamalalayam East Bank Rd, South Madavilagam, Vasan Nagar, Madappuram, Thiruvarur, Tamil Nadu 610001
//     Hours: 
// Wednesday	9am–4pm
// Thursday	9am–4pm
// Friday	9am–4pm
// Saturday	Closed
// Sunday	Closed
// Monday	9am–4pm
// Tuesday	9am–4pm
// Phone: 04366 240 502

//Veludayar
// Address: SH 65, Madappuram, Thiruvarur, Tamil Nadu 610002
// Hours: 
// Wednesday	8am–5pm
// Thursday	8am–5pm
// Friday	8am–5pm
// Saturday	8am–5pm
// Sunday	Closed
// Monday	8am–5pm
// Tuesday	8am–5pm
// Confirmed by this business 12 weeks ago
// Phone: 04366 240 456

//Sairam
// Address: QJHR+32P, Kodikkalpalayam, Thiruvarur, Tamil Nadu 610001
// Hours: 
// Wednesday	9am–4pm
// Thursday	9am–4pm
// Friday	9am–4pm
// Saturday	Closed
// Sunday	Closed
// Monday	9am–4pm
// Tuesday	9am–4pm

//GRM
// Address: QJFJ+4W5, Karaikaatu Street, Karaikaatu St, Thiruvarur, Tamil Nadu 610001
// Phone: 04366 222 363

//Fathima
// Address: Ramakey, Globe Tailor Colony, Kodikkalpalayam, Thiruvarur, Tamil Nadu 610002
// Phone: 04366 244 433

//Kasturba
// Address: QJGC+P4R, Vilamal, Thiruvarur, Tamil Nadu 610004

//New Bharath
// Address: 37, New St, Santhanam Nagar, Madappuram, Thiruvarur, Tamil Nadu 610001
// Areas served: Thiruvarur and nearby areas
// Hours: 
// Wednesday	9am–5pm
// Thursday	9am–5pm
// Friday	9am–5pm
// Saturday	9am–5pm
// Sunday	Closed
// Monday	9am–5pm
// Tuesday	9am–5pm
// Phone: 04366 242 522

// let school_1 = () => (
//         <div className="vs-boys">
//             <section className="vs-boys-img"></section>
//             <h1>Page 1</h1>
//             <h1>VS BOYS HR SEC SCHOOL</h1>
//             <h3>Phone: </h3>
//             <h3>Address: </h3>

//             <div className="links">

//             </div>
//         </div>
//     )
    
//     let school_2 = () => (
//         <div className="veludayar">
//             <section className="veludayar-img"></section>
//             <h1>Page 2</h1>
//             <h1>VELUDAYAR BOYS HR SEC SCHOOL</h1>
//             <h3>Phone: </h3>
//             <h3>Address: </h3>
            
//             <div className="links">

//             </div>
//         </div>
//     )

//     let school_3 = () => (
//         <div className="sairam">
//             <section className="sairam-img"></section>
//             <h1>Page 3</h1>
//             <h1>SAIRAM MATRICULATION HIGHER SECONDARY SCHOOL</h1>
//             <h3>Phone: </h3>
//             <h3>Address: </h3>
            
//             <div className="links">

//             </div>
//         </div>
//     )

//     let school_4 = () => (
//         <div className="grm">
//             <section className="grm-img"></section>
//             <h1>Page 4</h1>
//             <h1>SRI GRM GIRLS HIGHER SECONDARY SCHOOL</h1>
//             <h3>Phone: </h3>
//             <h3>Address: </h3>
            
//             <div className="links">

//             </div>
//         </div>
//     )

//     let school_5 = () => (
//         <div className="fathima">
//             <section className="fathima-img"></section>
//             <h1>Page 5</h1>
//             <h1>RC FATHIMA MATRICULATION SCHOOL</h1>
//             <h3>Phone: <i className="fa fa-phone"></i>tel:+914366242517</h3>
//             <h3>Address: </h3>
            
//             <div className="links">

//             </div>
//         </div>
//     )

//     let school_6 = () => (
//         <div className="kasturba">
//             <section className="kasturba-img"></section>
//             <h1>Page 6</h1>
//             <h1>KASTURBA GANDHI MATRICULATION HIGHER SECONDARY SCHOOL</h1>
//             <h3>Phone: </h3>
//             <h3>Address: </h3>
            
//             <div className="links">

//             </div>
//         </div>
//     )

    const handleSchoolClick = (id) =>
    {
        console.log(id)
        // setSchools(id)
        // console.log(typeof(id))
        // console.log(schools[id])

        // currentSchool = schools[id]
        
        console.log(setSchoolsImages(images[id]))

        setCurrentSchool(schools[id])
        console.log(currentSchool)

        setHandleToggleClick(!handleToggleClick)

        // setCurrentSchool(schools[id])
        // console.log(currentSchool)
        // console.log(typeof(currentSchool))
        // console.log({...currentSchool})
        // setMySchool(currentSchool)
        // console.log(mySchool)
        // console.log(typeof(mySchool))

        // return <SchoolDetails greet='Welcome' mySchoolName={currentSchool.name}/>

        // {
        //     currentSchool.map(function(school)
        //     {
        //         console.log(school)
        //         console.log(typeof(school))

        //         // return ()
        //     })
        // }

        // console.log()

        // console.log('Schools Index', schools[e])

        // switch(e)
        // {
        //     case 1: setSchool(school_1)
        //     break;
        //     case 2: setSchool(school_2)
        //     break;
        //     case 3: setSchool(school_3)
        //     break;
        //     case 4: setSchool(school_4)
        //     break;
        //     case 5: setSchool(school_5)
        //     break;
        //     case 6: setSchool(school_6)
        //     break;
        //     default: 
        //     console.log('Wrong value')
        // }
    }

    // console.log(currentSchool)
    // console.log(typeof(currentSchool))

    return(
        <>
        <MyNavbar/>

        <div className="container schools py-4 px-4">
            <div className="row fs-4">
            <h1>Schools</h1>
            <hr/>

            <div className="col-md-4">

            <div className="cbse-schools list-group">
                <a href="#" className="list-group-item school-head">CBSE School</a>
                <a className="list-group-item" onClick={e => handleSchoolClick(0)}>THE TRINITY ACADEMY</a>
            </div>
            <br/>

            <div className="govt-schools list-group">
                <a href="" className="list-group-item school-head">Government Schools</a>
                <a className="list-group-item" onClick={e => handleSchoolClick(1)}>Government Higher Secondary School, Kattur</a>
                <a className="list-group-item" onClick={e => handleSchoolClick(2)}>Government Music School, Senthamangalam</a>
            </div>
            <br/>

            <div className="private-schools list-group">
                <a href="" className="list-group-item school-head">Private Schools</a>

                <a className="list-group-item" onClick={e => handleSchoolClick(3)}>V.S.Boys Higher Secondary School</a>
                <a className="list-group-item" onClick={e => handleSchoolClick(4)}>Veludayar Higher Secondary School</a>
                <a className="list-group-item" onClick={e => handleSchoolClick(5)}>Sairam Matriculation Higher Secondary School</a>
                <a className="list-group-item" onClick={e => handleSchoolClick(6)}>Sri GRM Girls Higher Secondary School</a>
                <a className="list-group-item" onClick={e => handleSchoolClick(7)}>R.C. Fathima Matriculation School</a>                
                <a className="list-group-item" onClick={e => handleSchoolClick(8)}>Kasturba Gandhi Matriculation Higher Secondary School</a>
                <a className="list-group-item" onClick={e => handleSchoolClick(9)}>New Bharath Matriculation Higher Secondary School</a>
            </div>
            </div>
        
            <div className="col-md-8" id="s1">
                
                {/* <h1>Page</h1> */}

                <NavDetails {...currentSchool} imgs={schoolsImages} handleToggleClick={handleToggleClick} schoolsImages={images}/>
 
            </div>
            </div>
        </div>

        </>
    );
}

export default Schools;
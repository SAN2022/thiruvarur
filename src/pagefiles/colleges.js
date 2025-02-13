import React from "react";
import { useState, useEffect } from "react";
import MyNavbar from "../components/navbar";
import '../index.css';
import NavDetails from "./Details/NavDetails";

import cutn from '../images/Colleges-Images/cutn.jpg'
import tmc from '../images/Colleges-Images/tmc.jpg'
import thiru_vi_ka from '../images/Colleges-Images/thiru-vi-ka.png'
import aarooran from '../images/Colleges-Images/aarooran.jpg'
import nethaji from '../images/Colleges-Images/nethaji.jpg'
import ra from '../images/Colleges-Images/ra.jpg';


function Colleges()
{
    const [colleges, setColleges] = useState([]);
    const [currentCollege, setCurrentCollege] = useState([]);

    console.log(colleges)

    const images = [cutn, tmc, thiru_vi_ka, aarooran, nethaji, ra]
    const [collegesImages, setCollegesImages] = useState()

    useEffect(()=>
    {
        fetch('http://localhost:3004/colleges')
        .then(res => res.json())
        .then(res => {
            setColleges(res)
        })
    },[])

    // let college_1 = () => (
    //     <div className="cutn">
    //         <section className="cutn-img"></section>
    //         <h1>Page 1</h1>
    //         <h1>CENTRAL UNIVERSITY OF TAMIL NADU, THIRUVARUR</h1>
    //         <h3>Phone: </h3>
    //         <h3>Address: </h3>
    //         <div className="links">
    //         https://cutn.ac.in/

    //         </div>
    //     </div>
    // )
    
    // let college_2 = () => (
    //     <div className="tmc">
    //         <section className="tmc-img"></section>
    //         <h1>Page 2</h1>
    //         <h1>GOVERNMENT THIRUVARUR MEDICAL COLLEGE, THIRUVARUR</h1>
    //         <h3>Phone: </h3>
    //         <h3>Address: </h3>
            
    //         <div className="links">

    //         </div>
    //     </div>
    // )

    // let college_3 = () => (
    //     <div className="tvk">
    //         <section className="tvk-img"></section>
    //         <h1>Page 3</h1>
    //         <h1>THIRU.VI.KA.GOVT.ARTS COLLEGE</h1>
    //         <h3>Phone: </h3>
    //         <h3>Address: </h3>
            
    //         <div className="links">

    //         </div>
    //     </div>
    // )

    // let college_4 = () => (
    //     <div className="aarooran">
    //         <section className="aarooran-img"></section>
    //         <h1>Page 4</h1>
    //         <h1>AAROORAN POLYTECHNIC COLLEGE</h1>
    //         <h3>Phone: </h3>
    //         <h3>Address: </h3>
            
    //         <div className="links">

    //         </div>
    //     </div>
    // )

    // let college_5 = () => (
    //     <div className="nethaji">
    //         <section className="nethaji-img"></section>
    //         <h1>Page 5</h1>
    //         <h1>NETHAJI SUBASH CHANDRA BOSE COLLEGE</h1>
    //         <h3>Phone: <i className="fa fa-phone"></i>tel:+914366242517</h3>
    //         <h3>Address: </h3>
            
    //         <div className="links">

    //         </div>
    //     </div>
    // )

    // let college_6 = () => (
    //     <div className="ra">
    //         <section className="ra-img"></section>
    //         <h1>Page 6</h1>
    //         <h1>RABIAMMAL AHAMED MAIDEEN COLLEGE FOR WOMEN</h1>
    //         <h3>Phone: </h3>
    //         <h3>Address: </h3>
            
    //         <div className="links">

    //         </div>
    //     </div>
    // )

    // const handleCollegeClick = (e) =>
    // {
    //     console.log(e)

    //     switch(e)
    //     {
    //         case 1: setCollege(college_1)
    //         break;
    //         case 2: setCollege(college_2)
    //         break;
    //         case 3: setCollege(college_3)
    //         break;
    //         case 4: setCollege(college_4)
    //         break;
    //         case 5: setCollege(college_5)
    //         break;
    //         case 6: setCollege(college_6)
    //         break;
    //         default: 
    //         console.log('Wrong value')
    //     }
    // }

    //CUTN
//     Central University of Tamil Nadu is a central university located in Thiruvarur, Tamil Nadu. Wikipedia
// Address: Central University of Tamil Nadu, Neelakudi, Thiruvarur – 610 005, INDIA
// Phone: 04366 277 261
//Web - https://cutn.ac.in/
//Wiki - https://en.wikipedia.org/wiki/Central_University_of_Tamil_Nadu
//Mail - info@cutn.ac.in

//Medical
// Address: QJG4+633, Collector office Master Plan Complex, Thandalai, Tamil Nadu 610004
// Phone: 04366 220 040
// Founded: 2010
// Total enrollment: 227 (2021)
//Web - http://www.tmctvr.ac.in/tmctvr/
//Mail - deantvr@tn.gov.in

//Thiru.vi.ka
// Address: Thiru. Vi. Ka. Govt. Arts College,
// Nagai Main Road,
// Kidarankondan - Post,
// Thiruvarur - 610 003.
// Hours: 
// Wednesday	8:01am–6pm
// Thursday	8:01am–6pm
// Friday	8:01am–6pm
// Saturday	Closed
// Sunday	Closed
// Monday	8:01am–6pm
// Tuesday	8:01am–6pm
// Confirmed by this business 2 weeks ago
// Total enrollment: 1,508 (2022)
// Founded: 1970
//Web - http://www.thiruvikacollege.co.in/
//Mail - principal@thiruvikacollege.co.in

//Aarooran
// Address: Kangalachari, Mayiladuthurai, East Coast Rd, Surakkudi, Tamil Nadu 610101
// Hours: 
// Wednesday	10am–4pm
// Thursday	10am–4pm
// Friday	10am–4pm
// Saturday	10am–4pm
// Sunday	Closed
// Monday	10am–4pm
// Tuesday	10am–4pm
// Phone: 04366 277 560
// Total enrollment: 300 (2021
// Founded: 2007

//Nethaji
// Address: QJVM+XG2, Pudhu Nagar, Tamil Nadu 610001

//RA
// Address: QJFV+XM3, Vasan Nagar, Thiruvarur, Tamil Nadu 610001
// Hours: 
// Wednesday	9am–5pm
// Thursday	9am–5pm
// Friday	9am–5pm
// Saturday	9am–5pm
// Sunday	Closed
// Monday	9am–5pm
// Tuesday	9am–5pm
// Phone: 04366 242 637
//Web - http://www.racwomen.edu.in/
//Mail - racforwomen@yahoo.com

    const handleCollegeClick = (id) =>
    {
        console.log(id)
        
        console.log(setCollegesImages(images[id]))

        setCurrentCollege(colleges[id])
        console.log(currentCollege)   
    }

    return(
        <>
            <section>
                <MyNavbar/> 
            </section>

            <div className="container colleges py-4 px-4">
            <div className="row fs-4">
                
            <h1>Colleges/Universities</h1>
            <hr/>

            <div className="col-md-4">
            <div className="list-group cutn/medical">
                <a href="#" className="list-group-item college-head">CUTN/ MEDICAL College</a>
                <a href="#" className="list-group-item" onClick={e => handleCollegeClick(0)}>CENTRAL UNIVERSITY OF TAMIL NADU, THIRUVARUR</a>
                <a href="#" className="list-group-item" onClick={e => handleCollegeClick(1)}>GOVERNMENT THIRUVARUR MEDICAL COLLEGE, THIRUVARUR</a>
            </div>
            <br/>
            <div className="list-group govt-colleges">
                <a href="#" className="list-group-item college-head">Government Colleges</a>
                <a href="#" className="list-group-item" onClick={e => handleCollegeClick(2)}>THIRU.VI.KA.GOVT.ARTS COLLEGE</a>
            </div>
            <br/>
            <div className="list-group private-colleges">
                <a href="#" className="list-group-item college-head">Private Colleges</a>
                <a href="#" className="list-group-item" onClick={e => handleCollegeClick(3)}>AAROORAN POLYTECHNIC COLLEGE, THIRUVARUR</a>
                <a href="#" className="list-group-item" onClick={e => handleCollegeClick(4)}>NETHAJI SUBASH CHANDRA BOSE GIRLS ARTS AND SCIENCE COLLEGE</a>
                <a href="#" className="list-group-item" onClick={e => handleCollegeClick(5)}>RABIAMMAL AHAMED MAIDEEN COLLEGE FOR WOMEN</a>                
            </div>
            </div>

            <div className="col-md-8" id="s1">

                {/* <h1>Page</h1> */}
                <NavDetails {...currentCollege} imgs={collegesImages}/>

            </div>
            </div>
            </div>
        </>
    )
}
export default Colleges;
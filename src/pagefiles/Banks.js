import React, { useEffect, useState } from "react";
import '../index.css';
import MyNavbar from "../components/navbar";
import NavDetails from "./Details/NavDetails";

import axis from '../images/Banks-Images/axis.jpg';
import hdfc from '../images/Banks-Images/hdfc.jpg';
import icici from '../images/Banks-Images/icici.jpg';
import canara from '../images/Banks-Images/canara.jpg';
import canara_syndicate from '../images/Banks-Images/canara-syndicate.png';
import andhra from '../images/Banks-Images/andhra.jpg';
import idbi from '../images/Banks-Images/idbi.jpg';
import equitas from '../images/Banks-Images/equitas.jpeg';
import union from '../images/Banks-Images/union.jpg';
import tmb from '../images/Banks-Images/tmb.jpeg';
import cub from '../images/Banks-Images/cub.jpg';
import sbi from '../images/Banks-Images/sbi.jpg';
import sri_lakshmi_narayana from '../images/Banks-Images/sri-lakshmi-narayana.jpg';
import ujivan from '../images/Banks-Images/ujivan.jpg';
import lakshmi_vilas from '../images/Banks-Images/lakshmi-vilas.jpg';
import karur from '../images/Banks-Images/karur.png';
import sri_kamalambika from '../images/Banks-Images/sri-kamalambika.jpg';
import indian from '../images/Banks-Images/indian.jpg';

function Banks()
{
    const [banks, setBanks] = useState([]);
    const [currentBank, setCurrentBank] = useState([])

    const images = [
        axis, hdfc, icici, canara, canara_syndicate, andhra, idbi, equitas, union,tmb, cub, sbi, 
        sri_lakshmi_narayana, ujivan, lakshmi_vilas, karur, sri_kamalambika, indian
    ]

    const [banksImages, setBanksImages] = useState()

    console.log(banks)
    
    useEffect(()=>
    {
        fetch('http://localhost:3004/banks')
        .then(res => res.json())
        .then(res => setBanks(res))
    },[])

    const handleBankClick = (id) =>
    {
        console.log(id)

        console.log(setBanksImages(images[id]))

        setCurrentBank(banks[id])
        console.log(currentBank)
    }

return(
        <>
        <MyNavbar/>

        <div className="container-fluid banks">

            <h1>Banks</h1>
            <hr/>

            <div className="col-md-4">
            <div className="list-group">
                <a href="#" className="list-group-item bank-head">Banks</a>
                <a href="#" className="list-group-item" onClick={e => handleBankClick(0)}>AXIS BANK</a>
                <a href="#" className="list-group-item" onClick={e => handleBankClick(1)}>HDFC BANK</a>
                <a href="#" className="list-group-item" onClick={e => handleBankClick(2)}>ICICI BANK</a>
                <a href="#" className="list-group-item" onClick={e => handleBankClick(3)}>CANARA BANK</a>
                <a href="#" className="list-group-item" onClick={e => handleBankClick(4)}>CANARA (SYNDICATE) BANK</a>
                <a href="#" className="list-group-item" onClick={e => handleBankClick(5)}>ANDHRA BANK</a>
                <a href="#" className="list-group-item" onClick={e => handleBankClick(6)}>IDBI BANK</a>
                <a href="#" className="list-group-item" onClick={e => handleBankClick(7)}>EQUITAS BANK</a>
                <a href="#" className="list-group-item" onClick={e => handleBankClick(8)}>UNION BANK</a>
                <a href="#" className="list-group-item" onClick={e => handleBankClick(9)}>TAMILNAD MERCENTILE BANK</a>
                <a href="#" className="list-group-item" onClick={e => handleBankClick(10)}>CITY UNION BANK</a>
                <a href="#" className="list-group-item" onClick={e => handleBankClick(11)}>STATE BANK OF INDIA</a>
                <a href="#" className="list-group-item" onClick={e => handleBankClick(12)}>SRI LAKSHMI NARAYANA BANK</a>
                <a href="#" className="list-group-item" onClick={e => handleBankClick(13)}>UJIVAN BANK</a>
                <a href="#" className="list-group-item" onClick={e => handleBankClick(14)}>LAKSHMI VILAS BANK</a>
                <a href="#" className="list-group-item" onClick={e => handleBankClick(15)}>KARUR VYSYA BANK</a>
                <a href="#" className="list-group-item" onClick={e => handleBankClick(16)}>SRI KAMALAMBIKA BANK</a>
                <a href="#" className="list-group-item" onClick={e => handleBankClick(17)}>INDIAN BANK</a>
            </div>
            </div>

            <div className="col-md-8" id="s1">

            {/* <h1>Page</h1> */}

            <NavDetails {...currentBank} imgs={banksImages}/>

            </div>
        </div>
        </>
    );
}

export default Banks;
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faAddressCard, faEnvelope, faGlobe, faImages, faPhone } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect } from "react";
import './Details.css';

function NavDetails(props)
{
    const {name, address, phone, web, email, imgs} = props

    console.log(name)
    console.log(imgs)

    console.log(props.schoolsImages)


    return (
        <>

            {/* <div className='card-content'>
                <div className='card-images'>
                    {props.schoolsImages.map(function(img)
                    {
                        return (
                        <div className='card-img'>
                            <section className="images" style={{backgroundImage: `url(${img})`}}></section>
                            <h3>{name}</h3>
                        </div>
                        )
                    })}
                </div>
            </div> */}

        {/* Data in Table format */}

        {/* { props.handleToggleClick ? <h2>True</h2>: ''} */}

        {/* <main>
        <div className='content-card'>
            <div className='card-images'>
                <section className='navDetails-img' style={{backgroundImage: `url(${imgs})`}}></section>
                <h3>{name}</h3>
            </div>
        </div>
        </main> */}

        <div>
            <div className='navDetails-img' style={{backgroundImage: `url(${imgs})`}}></div>

            <h2>{name}</h2>
            
            <table className="navdetails-table">
                
                <tbody>
                    <tr>
                        <th><FontAwesomeIcon icon={faAddressCard}/>   Address</th>
                        <td>{address}</td>
                    </tr>
                    <tr>
                        <th><FontAwesomeIcon icon={faPhone}/>   Phone</th>
                        <td>{phone}</td>
                    </tr>
                    <tr>
                        <th><FontAwesomeIcon icon={faEnvelope}/>   Email</th>
                        <td>{email}</td>
                    </tr>
                    <tr>
                        <th><FontAwesomeIcon icon={faGlobe}/>   Website</th>
                        <td><a href={web} target='_blank'>{web}</a></td>
                    </tr>
                                            
                </tbody>
            </table>

        </div>

            {/* <h1>{name}</h1>
            <h2>Address: {address}</h2>
            <h3>Phone: {phone}</h3>
            <h3>Web: {web}</h3>
            <h3>Email: {email}</h3> */}
        </>
    )
}

export default NavDetails;
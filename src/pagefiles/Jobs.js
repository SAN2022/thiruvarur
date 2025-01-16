import React from "react";
import { useState,useEffect } from "react";
import '../index.css';
import MyNavbar from '../components/navbar';

function Jobs(){

    const [myJobs, setMyJobs] = useState([]);
    const [updateJobs, setUpdateJobs] = useState([]);
    const Stuffs = {};
    // const Nums = [0,1,2,3,4,5,6,7,8] 

    // const filteredNums = Nums.filter(function (value){
    //     return value > 5    
    // })
    // console.log(filteredNums)

    // const fetchDetails = async () =>
    // {
    //   await fetch(`http://localhost:3004/jobs`)
    //   .then(res => res.json())
    // //   .then(res => console.log(res))
    //   .then(res => setMyJobs(res))
    //   .then(res => console.log(res))
    // }
    useEffect(()=>
    {
        // fetch(`http://localhost:3004/jobs`)
        fetch(`https://san2022.github.io/API/jobs.json`)
        .then(res => res.json())
      //   .then(res => console.log(res))
    //   .then(res => console.log(res.jobs))
      .then(res => setMyJobs(res.jobs))
    //   console.log(myJobs)
    },5000)

    const filteredJobs = myJobs.filter(value=>
        !value.name == ""
    )

    // console.log(myJobs)
    console.log(typeof(filteredJobs))
    // setUpdateJobs(filteredJobs)
    // console.log(updateJobs)
    // filteredJobs.map(function(value){
    //     return console.log(value.name)
    // })

    // setUpdateJobs(filteredJobs)
    // console.log(updateJobs)

    // console.log(updateJobs)
    // console.log('Filtered Jobs:', filteredJobs)
    // console.log('Filtered Jobs:', unFilteredJobs)

    // console.log(typeof(filteredJobs))
    // console.log(filteredJobs.jobs)
    // setUpdateJobs(filteredJobs)
    // console.log(updateJobs)
    
    // useEffect(()=>
    // {
    //   setInterval(() => {
    //     fetchDetails()
    //   }, 2000);
    // })
return(
    <>
    <MyNavbar/>    
    <div className="container-fluid">
        {/* <h1 className="see-get">See & Get your job</h1> */}
    <div className="velai"> 

        <div className="card1">
            <div className="card1-top">
                {filteredJobs.map(function(value){
                    return(
                        <>
                            <h2 className="item-name item">{value.name}</h2>
                            <h2 className="item-web item">{value.web}</h2>
                        </>
                    )
                })}

                {/* <h2>Railway Recruitment Board (RRB) <a href=""></a></h2>
                <p>Railway Recruitment Board (RRB) - இரயில்வே துறை Recruitment of Assistant Loco Pilot (ALP) பணிக்கு 20.01.2024 அன்றிலிருந்து விண்ணப்பிக்கலாம் என்று வெளியிட்டது. இந்த Recruitment of Assistant Loco Pilot (ALP) பணிக்கு விண்ணப்பிக்க இன்று (19.02.2024) கடைசி தேதியாக குறிப்பிடப்பட்டிருந்தது. இந்த நிலையில் இன்று (19.02.2024) தான் கடைசி தேதி என்பதால் இதுவரை இந்த பணிக்கு விண்ணப்பிக்க தவறியவர்கள் வெகு விரைவில் வாய்ப்பை பயன்படுத்திக்கொண்டு விண்ணப்பித்துகொள்ளுங்கள்</p> */}
            </div>

            <h3 className="head-center">Railway Recruitment Board (RRB) <br/>
                        Recruitment of Assistant Loco Pilot (ALP) 
            </h3>

            {/* <table className="card-table">
                <tbody>
                    <tr>
                        <th>Total No of Vacancies:</th>
                        <td>5696</td>
                    </tr>
                    <tr>
                        <th>Application Start Date:</th>
                        <td>20.01.2024</td>
                    </tr>
                    <tr>
                        <th>Application Last Date:</th>
                        <td>19.02.2024</td>
                    </tr>
                    <tr>
                        <th>Correction Window:</th>
                        <td>20.02.2024 to 29.02.2024</td>
                    </tr>
                    <tr>
                        <th>CBT 1 Exam Date:</th>
                        <td>June - Aug 2024</td>
                    </tr>
                    <tr>
                        <th>CBT 2 Exam Date:</th>
                        <td>Sep 2024</td>
                    </tr>
                    <tr>
                        <th>SC/ ST/ Female/ ESM/ Minorities/ EBC:</th>
                        <td>Rs.250/-</td>
                    </tr>
                    <tr>
                        <th>All Other Candidates:</th>
                        <td>Rs.500/-</td>
                    </tr>
                    <tr>
                        <th>Pay by:</th>
                        <td>The payment can be made by using Debit Cards, Credit Cards, Internet Banking or UPI.</td>
                    </tr>
                    <tr>
                        <th>Age Limit:</th>
                        <td>Age as On : 01.07.2024
                            <br/>
                            Minimum Age: 18 Years
                            <br/>
                            Maximum Age: 33 Years
                            <br/>
                            Age Relaxation given in the notification
                        </td>
                    </tr>
                    <tr>
                        <th>Official Notification:</th>
                        <td>
                            <a href="https://www.rrbchennai.gov.in/downloads/cen-01-2024/Detailed_CEN_01_2024_English_final_1900_hrs.pdf" target="_blank">Click here</a></td>
                    </tr>
                    <tr>
                        <th>To Apply on Official Website:</th>
                        <td>
                            <a href="https://www.rrbchennai.gov.in/" target="_blank">Click here</a>
                        </td>
                    </tr>
                </tbody>
            </table> */}
        </div>

    {/* <h1>Get your latest job updates</h1> */}
    {/* <div className="job-table job-table01">
        <table>
            <tbody>
            <tr>
                    <th>Name:</th>
                    <td>MALLIGA THANGA MALIGAI</td>
                </tr>
                <tr>
                <th>Qualification:</th>
                    <td>12th</td>
                </tr>

                <tr>
                <th>Position/Role:</th>
                    <td>Collection Staff/Executive</td>
                </tr>
                <tr>
                <th>Salary:</th>
                    <td>17,000 to 20,000</td>
                </tr>
                <tr>
                <th>Location:</th>
                    <td>PANAKAL SALAI, THIRUVARUR</td>
                </tr>
                <tr>
                <th>Phone:</th>
                    <td>9629923426</td>
                </tr>
                <tr>
                <th>Refer the job with Naukri:</th>
                    <td><a href="https://www.google.com/search?q=thiruvarur+job+malliga+thanga+maligai&ibp=htl;jobs&sa=X&ved=2ahUKEwjKhojN4dyDAxUdxTgGHUg-CdYQudcGKAF6BAgLEAg&sxsrf=ACQVn0-7ip4dkaAzLtDgOBGn_sMHfPNo-g:1705231295586#htivrt=jobs&htidocid=f4Buhho3u12-DCWsAAAAAA%3D%3D&fpstate=tldetail" className="click-here">Click here</a></td>
                </tr>
                </tbody>
        </table> 

        <div className="youtube-link">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/fgVi48UXKVk?si=NDuicyeUNIfkdhJN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    </div>
    <div className="job-table job-table02">
        <table>
            <tbody>
                <tr>
                    <th>Name:</th>
                    <td>SAMSUNG SERVICE CENTER (MADHURA ELECTRONICS)</td>
                </tr>
                <tr>
                <th>Qualification:</th>
                    <td>Any degree</td>
                </tr>
                <tr>
                <th>Salary:</th>
                    <td>Upto 15,000</td>
                </tr>
                <tr>
                <th>Location:</th>
                    <td>VILAMAL, THIRUVARUR</td>
                </tr>
                <tr>
                <th>Phone:</th>
                    <td>9994418114, 9952531201</td>
                </tr>
            </tbody>
        </table> 

        <div className="youtube-link">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/qS8NIC4pAi0?si=Fqco8Iwszde2lyhH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    </div> */}
    </div>
 </div>
</>
)}

export default Jobs;
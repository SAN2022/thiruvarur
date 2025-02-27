import React from "react";
import { ReactDOM } from "react";
import {BrowserRouter as router, Route, Link, NavLink} from 'react-router-dom';
import { Navbar } from "react-bootstrap";
import MyNavbar from "../components/navbar";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowRight, faArrowTurnRight, faBank, faChurch, faHospital, faHotel, faSchool, faTheaterMasks, faUniversity } from '@fortawesome/free-solid-svg-icons';

function About()
{
  return(
    <>
    <MyNavbar/>

    <div className='container py-5'> 
      <div className="row">
        <div className="col-md-12">
        <div className='content'>
        <h1>Welcome to you..!</h1>

        <div className='about'>

          <h2>வரலாறு</h2>
          <hr/>
          <div className='dis history'>
          <h3 className='text'>திருவாரூர் சோழர்களின் ஐந்து பாரம்பரிய தலைநகரங்களுள் ஒன்றாகும். (ஆரூர், ஆவூர், குடவாயில், வல்லம், உறந்தை) திருவாரூரை ஆண்ட மனுநீதி சோழன், பசுவிற்கு நீதி வழங்க தன் சொந்த மகனையே தேரை ஏற்றி கொன்றது வரலாற்றில் நீதிக்கு சிறந்த எடுத்துக்காட்டாக அறியப்படுகிறது. இந்த நிகழ்வை சோழர்கள் கல்தேராக வடித்தனர். திருவாரூர் கோவிலுக்கு வடகிழக்கே கல்தேர் அமைந்துள்ளது. கல்தேரை பொதுமக்கள் காலை மற்றும் மாலை வேளைகளில் காணலாம்.</h3>
          <div className='imgbox imgbox1'></div>
          </div>

          <h2>தேர் திருவிழா</h2>
          <hr/>
          <div className='dis ther'>
          <div className='imgbox imgbox2'></div>
          <h3 className='text'>திருவாரூர் தேரானது, ஆசியாவிலேயே மிகப் பெரிய தேராகும். ஆயிரக்கணக்கான பக்தர்கள் பங்கேற்று தேரை வடம்பிடித்து இழுக்கின்றனர். அலங்கரிக்கப்பட்ட ஆழித்தேரின் உயரம் 96 அடியும், 300 டன் எடையும் ஆகும். இந்நிகழ்ச்சியில் தமிழகம் முழுவதிலும் இருந்து லட்சக்கணக்கான மக்கள் கலந்து கொள்கின்றனர்.</h3>
          </div>

          <h2>திருவாரூர் தியாகராஜர் கோயில்</h2>
          <hr/>
          <div className='dis temple'>
          <h3 className='text'>திருவாரூர் தியாகராஜர் கோயில், மிகவும் புகழ்பெற்ற பழமையானதும், பிரம்மாண்டமானதும் ஆன பெரிய கோயில் ஆகும். இக்கோயில் நாயன்மார்களால் பாடல் பெற்ற தலங்களில் ஒன்றாகவும், பஞ்சபூதத் தலங்களில் பிருதிவித் தலமாகவும் உள்ளது. தேவாரப் பாடல் பெற்ற தலங்களில், சோழ நாடு காவிரி தென்கரைத் தலங்களில் அமைந்துள்ள 87ஆவது சிவத்தலமாகும். சோழ கல்வெட்டுகளில், தியாகராஜாவை விதிவிதாங்கர் என்றும் "தியாகராஜா" என்ற பெயர் கி.பி 15-16 ஆம் நூற்றாண்டில் தோன்றியதாகவும் குறிப்பிடப்பட்டுள்ளது.</h3>
          <div className='imgbox imgbox3'></div>
          </div>

        </div>
        </div>
      </div>     
      
      </div>

    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <center>
            {/* <h3>Get it play..!</h3> */}
            <iframe width="1100" height="400" src="https://www.youtube.com/embed/ZJ5CjyEwM1k?si=JX_uK2aauCaYCr2H" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </center>
          </div>
        </div>
      </div>
        
    </section>
    </div>

<section className='footer mt-5'>
        <div className='container-fluid bg-dark'>
          <div className='row justify-content-center py-5'>
            <div className='col-md-2'>

                <div className='navigations'>
                  <h3>Navigations</h3>
                  <hr className='footer-line'/>

                  <ul className='fs-4'>
                    {/* <Link to='/'> */}
                      <li><a href='#for-home'><FontAwesomeIcon icon={faArrowTurnRight}/> Home</a></li>
                    {/* </Link> */}
            
                    <Link to='/About'>
                      <li><FontAwesomeIcon icon={faArrowTurnRight}/> About</li>
                    </Link>

                    <Link to='/Contact'>
                      <li><FontAwesomeIcon icon={faArrowTurnRight}/> Contact us</li>
                    </Link>

                  </ul>
                </div>
              </div>

              <div className='col-md-2'>
                <div className='navigations'>
                  <h3>Useful Links</h3>
                  <hr className='footer-line'/>

                  <ul className='fs-4'>
                    <Link to='/Schools'>
                      <li><FontAwesomeIcon icon={faArrowRight}/> Schools</li>
                    </Link>
                    <Link to='/Colleges'>
                      <li><FontAwesomeIcon icon={faArrowRight}/> Colleges</li>
                    </Link> 
                    <Link to='/Hospitals'>
                      <li><FontAwesomeIcon icon={faArrowRight}/> Hospitals</li>
                    </Link>
                    <Link to='/Theatres'>
                      <li className='foot-link'><FontAwesomeIcon icon={faArrowRight}/> Theaters</li>
                    </Link>
                    <Link to='/Hotels'>
                      <li className='foot-link'><FontAwesomeIcon icon={faArrowRight}/> Hotels/Residencies</li>
                    </Link>
                    <Link to='/Banks'>
                      <li className='foot-link'><FontAwesomeIcon icon={faArrowRight}/> Banks</li>
                    </Link> 
                  </ul>
                </div>

              </div>
          </div>
        </div>

      </section>


    

    </>
)
}
export default About;
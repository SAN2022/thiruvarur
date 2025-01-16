import React from "react";
import { ReactDOM } from "react";
import {BrowserRouter as router, Route, Link, NavLink} from 'react-router-dom';
import { Navbar } from "react-bootstrap";
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import { faDroplet, faHome, faPhoneSquareAlt } from "@fortawesome/free-solid-svg-icons";
import MyNavbar from "../components/navbar";

function About()
{
  return(
    <>
    <MyNavbar/>

    <div className='container'>      
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

      <section>
        <center>
          {/* <h3>Get it play..!</h3> */}
          <iframe width="1000" height="400" src="https://www.youtube.com/embed/ZJ5CjyEwM1k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </center>
      </section>

    </div>
    </>
)
}
export default About;
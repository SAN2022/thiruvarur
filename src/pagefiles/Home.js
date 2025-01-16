import React from 'react';
import {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Link, NavLink, Routes,} from 'react-router-dom';
import '../index.css';
import MyNavbar from '../components/navbar';
import Schools from './schools.js';
import Colleges from './schools.js';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowRight, faArrowTurnRight, faBank, faChurch, faHospital, faHotel, faSchool, faTheaterMasks, faUniversity } from '@fortawesome/free-solid-svg-icons';
import Weather from './Details/Weather';
import Jobs from './Jobs.js';
import gif from './../images/Newgif.gif';

// AutoImgSlider
import ImageSliderAuto from './Automatic-Slider/ImageSliderAuto.js';
import { ImageData } from './Automatic-Slider/JsonData.js';
import About from './about.js';

// import Question from './Most-Asked';

// Add live weather in thiruvarur

function Home() {    
    var bkimgs = ['img1','img2','img3','img4'];
    var texts = ['Aazhi-Ther', 'Collectorate', 'Medical-College', 'Birds-Sanctuary']

    const [index, setIndex] = useState(0)
    const [update, setUpdate] = useState([])
    const [text, setText] = useState(texts[index])
    const [mySlide, setMySlide] = useState(false)

    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)

    var myImage;
    myImage = bkimgs[index]

    // console.log(index)
    // console.log(myImage)

    const handlePreClick = () =>
    {      

      // setIndex(index - 1)
      // setText(texts[index - 1])
      // myImage = bkimgs[index]
      // if(index == 0)
      // {
      //   setIndex(bkimgs.length - 1)
      //   setText(texts[bkimgs.length - 1])
      // }
    }

    const handleNextClick = () =>
    {          
      clearTimeout(ahead)

      setIndex(index + 1)
      setText(texts[index + 1])
      myImage = bkimgs[index]
      if(index == 3)
      {   
          setIndex(0)
          setText(texts[0])
      }
    }

    const autoNextClick = () =>
    {          
      setIndex(index + 1)
      setText(texts[index + 1])
      myImage = bkimgs[index]
      if(index == 3)
      {   
          setIndex(0)
          setText(texts[0])
      }
    }

    // const fetchWeather = async () =>
    // {
    //   await fetch(`https://fcc-weather-api.glitch.me/api/current?lat=10.7661&lon=79.6344`)
    //   .then(res => res.json())
    //   .then(res => setUpdate(res))
    // }
    
    // const fetchDetails = async () =>
    // {
    //   await fetch(`http://localhost:3004/schools`)
    //   .then(res => res.json())
    //   .then(res => console.log(res))
    // }
    
    const fetchDetails = async () =>
    {
      await fetch(`https://san2022.github.io/API/db.json`)
      .then(res => res.json())
      .then(res => console.log(res.schools))
    }

    const ahead = () => setTimeout(() => {
      autoNextClick()
    }, 2000);

    useEffect(()=>
    {
      setTimeout(() => {
        // fetchDetails()
      }, 2000);

      setTimeout(() => {
        autoNextClick()
      }, 2000);

      ahead()

      setInterval(() => {
        clock()
      }, 1000);
    })

    // console.log(update)
    // console.log(typeof(update))

    // console.log(update.main.temp[0])

    const clock = () =>
    {
      var date = new Date();
      var hours = date.getHours()
      var minutes = date.getMinutes()
      var seconds = date.getSeconds()

      setHours(hours)
      setMinutes(minutes)
      setSeconds(seconds)

      // console.log(hours + ':' + minutes + ':' + seconds)

      // return <h2>{hours} : {minutes} : {seconds}</h2>
    }

    return(
    <body>      
    <section id='for-home'>
      <MyNavbar />
    </section>

    <div className="container-fluid">     

      <div className='Auto-Img-Slider'>
        {/* <ImgSlider/> */}

        {/* <DemoCarousel/> */}
        {/* <div className='demo-carousel'></div> */}

      <ImageSliderAuto ImageData={ImageData} SlideInterValTime={2000}/>

      <div/>

        {/* <div className={bkimgs[index]} id="imgslide"> */}
        {/* <img src={images[value].img}/> */}
        {/* <h1>{images[value].name}</h1> */}
        {/* </div> */}
      
      {/* <div className='navs'>
        <button type="button" className="pre" onClick={handlePreClick}>{'<'}</button>

        <button type="button" className="next" onClick={handleNextClick}>{'>'}</button>     */}

        {/* <button type="button" className="pre" onClick={() => 
        {
          setIndex(index - 1)
          setText(texts[index - 1])
          myImage = bkimgs[index]
          if(index == 0)
          {
            setIndex(bkimgs.length - 1)
            setText(texts[bkimgs.length - 1])
          }
        }}>{'<'}</button>

        <button type="button" className="next" onClick={() => 
        {          
          setIndex(index + 1)
          setText(texts[index + 1])
          myImage = bkimgs[index]
          if(index == 3)
          {   
              setIndex(0)
              setText(texts[0])
          }
        }}>{'>'}</button>     */}

        {/* <div className='imgslide-radio'>
          <center>
            <div>
              <label for='radio'></label>
              <input type='radio' name='radio' className='radio'/>
            </div>
            <div>
              <label for='radio'></label>
              <input type='radio' name='radio' className='radio'/>
            </div>
            <div>
              <label for='radio'></label>
              <input type='radio' name='radio' className='radio'/>
            </div>
          </center> 
        </div> */}

        {/* <h1 className='slider-text'> */}
          {/* {index}  */}
          {/* {text}
        </h1> */}

        {/* <button type="button" className="pre" onClick={() => value === 0 ? setValue(2) : setValue(value - 1)}>{'<'}</button>
        <button type="button" className="next" onClick={() => value === 2 ? setValue(0) : setValue(value + 1)}>{'>'}</button>     */}

      {/* </div> */}

    {/* <div className='tvr-board'>
        
    </div> */}
    
    {/* Marquee running with Azhi-theru */}

    {/* <marquee >      //behaviour='left' */}
      {/* <div className='marquee'>
        
        <img width='20px'/>

        <div className='train-chain'></div>

        <div className='train-box'>
          <ul>
            <li>Latest News</li>
            <li>Updates</li>
            <li>Job offers</li>
          </ul>
        </div>

      </div> */}

    {/* </marquee> */}

      <div className='jobs'>
      
        <Link to='/Jobs'>
          <h1 className='tvr-job-head'>Job Updates & Reminders (வேலைவாய்ப்புகள் & நினைவூட்டல்கள்)<img src={gif} width={'50px'} height={'50px'}/></h1>
        </Link>

          {/* <Jobs/> */}
      </div>

      <hr className='top'/>
 
      {/* <Weather {...update}/>  */}
    

      <center> 
        {/* <section className='weather'>
            <h3>How's the weather in Thiruvarur</h3>
              {update.map(function(myWeather)
              {
                return (
                  <div>
                      <h2>{myWeather.main.temp}</h2>
                      
                      <img width='100px'/>
                  </div>
                )
              })}
              
        </section> */}
      </center>
      
      <div className='col-md-12'>

      <div className='col-md-3 navlinks'>
        
        <div className='collector-content'>
          {/* <div className='tamilnadu-logo'></div> */}
          <div className='collector-img'></div>
          <div className='hidden-round'></div>
          
          <div className='caption'>
            <h4>Tmt.T. Charusree., IAS.,</h4>
            <h5>District Collector,</h5>
            <h5>Thiruvarur District</h5>
            <h5>Tamil Nadu</h5>
          </div>
        </div>

        <div className='list-group'>
            <Link to='/Schools' className='list-group-item'>
              <div className='faNav-design'></div>
              <FontAwesomeIcon icon={faSchool}/>   Schools
            </Link>
            <Link to='/Colleges' className='list-group-item'>
              <div className='faNav-design'></div>
              <FontAwesomeIcon icon={faUniversity}/>   Colleges
            </Link>        
            <Link to='/Hospitals' className='list-group-item'>
              <div className='faNav-design'></div>
              <FontAwesomeIcon icon={faHospital}/>   Hospitals
            </Link>        
            <Link to='/Theatres' className='list-group-item'>
              <div className='faNav-design'></div>
              <FontAwesomeIcon icon={faTheaterMasks}/>   Theatres
            </Link>        
            <Link to='/Hotels' className='list-group-item'>
              <div className='faNav-design'></div>
              <FontAwesomeIcon icon={faHotel}/>   Hotels/Residencies
            </Link>        
            <Link to='/Banks' className='list-group-item'>
              <div className='faNav-design'></div>
              <FontAwesomeIcon icon={faBank}/>   Banks
            </Link>        
            <Link to='/Temples' className='list-group-item'>
              <div className='faNav-design'></div>
              <FontAwesomeIcon icon={faChurch}/>Temples
            </Link>  
                  
        </div>      
      
      <section>
          <div className='clock'>
            <h2>What's the time?</h2>

            <h2>{hours} : {minutes} : {seconds}</h2>
          </div>
      </section>

      <section className='nithra-jobs-thiruvarur'>
        <div className='jobs-bk'></div>
        <h3>Search & Get the latest jobs in Thiruvarur</h3>
        
        <h5>Click here below <div className='down-arrow'><FontAwesomeIcon icon={faArrowDown}/></div> : <br/>
          <a href='https://nithrajobs.com/jobs-in-tiruvarur/444?l=25&a=60' target='_blank'>https://nithrajobs.com/jobs-in-tiruvarur/444?l=25&a=60</a>
        </h5>
      </section>

      </div>

    <div className='col-md-9'>
      <div className='content'>
        {/* <Schools/> */}
        {/* <Colleges/> */}
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

    <center>  
        <div className='col-md-12'>
            <div className='population'>
                <h3>Tiruvarur District Population of Rural and Urban</h3>
                <h4>The district has an total area of 2,274 sq km., 102.6 sq km is urban and 2171 sq km is rural. Out of total population of Tiruvarur, 1,403,348 in the district, 257,795 are in urban area and 1,006,482 are in rural area. 65,220 households are in urban, 261,999 are in rural area. 208,584 literate people are in urban, 737,887 are in rural area.</h4>
            </div>
        </div>    

        <section>
          {/* <div className='gallery-wrapper'> */}
            <h2 className='repository'>Respositories</h2>
            <hr/>
            <div className='gallery'>
              <div className='gallery-img gal1'></div>
              <div className='gallery-img gal2'></div>
              <div className='gallery-img gal3'></div>
              <div className='gallery-img gal4'></div>
              <div className='gallery-img gal5'></div>
              <div className='gallery-img gal6'></div>
              <div className='gallery-img gal7'></div>
              <div className='gallery-img gal8'></div>
              <div className='gallery-img gal9'></div>
              <div className='gallery-img gal10'></div>
            </div>
          {/* </div> */}
        </section>
    </center>

    <div className='row'>
    {/* <div className='col-md-12'> */}
      <footer className='footer'>
          <div className='links'>
            <h3>Links</h3>
            <hr className='footer-line'/>

            <ul>
              {/* <Link to='/'> */}
                <li><a href='#for-home'><FontAwesomeIcon icon={faArrowTurnRight}/> Home</a></li>
              {/* </Link> */}
      
              <Link to='/About'>
                <li><FontAwesomeIcon icon={faArrowTurnRight}/> About</li>
              </Link>
              <li><FontAwesomeIcon icon={faArrowTurnRight}/> Contact us</li>
            </ul>
          </div>

          <div className='content-navs'>
            <h3>Useful Links</h3>
            <hr className='footer-line'/>

            <ul>
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
        </footer>
        </div>
      </div>
      {/* </div> */}
    </div>

    </div> 
    
    </body>
    );
  }

export default Home;
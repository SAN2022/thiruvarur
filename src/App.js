import {Routes, Route, Link} from 'react-router-dom';
import React from 'react';
import './index.css';
import Home from './pagefiles/Home.js';
import Schools from './pagefiles/schools.js';
import Colleges from './pagefiles/colleges.js';
import Hospitals from './pagefiles/Hospitals';
import About from './pagefiles/about.js';
import Theatres from './pagefiles/Theaters';
import Hotels from './pagefiles/Hotels';
import "./FontAwesome/index";
import Banks from './pagefiles/Banks';
import Jobs from './pagefiles/Jobs.js';

import './App.css';
// import ImageSlider from './../component/ImageSlider';
import ImageSliderAuto from './pagefiles/Automatic-Slider/ImageSliderAuto.js';
import { ImageData } from './pagefiles/Automatic-Slider/JsonData.js';

// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

  function App() {    
    return (
      <>
        <div className='App'>          
          

          <Routes>
            <Route exact path='/' element={<Home/>}/>  
            <Route path='/about' element={<About/>}/>              
            <Route path='/Schools' element={<Schools/>}/>              
            <Route path='/Colleges' element={<Colleges/>}/>              
            <Route path='/Hospitals' element={<Hospitals/>}/>              
            <Route path='/Theatres' element={<Theatres/>}/>              
            <Route path='/Hotels' element={<Hotels/>}/>              
            <Route path='/Banks' element={<Banks/>}/>              
            <Route path='/Jobs' element={<Jobs/>}/>              
          </Routes>


            {/* <ImageSlider ImageData={ImageData}/><br/>
            <ImageSliderAuto ImageData={ImageData} SlideInterValTime={ 2000}/> */}
        </div>
      </>
    )
    
  }

export default App;

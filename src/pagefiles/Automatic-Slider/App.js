import './App.css';
// import ImageSlider from './../component/ImageSlider';
import ImageSliderAuto from './ImageSliderAuto';
import { ImageData } from './JsonData';

function App() {
  return (
      <>
          {/* <ImageSlider ImageData={ImageData}/><br/> */}
          <ImageSliderAuto ImageData={ImageData} SlideInterValTime={ 2000}/>
      </>

  );
}

export default App;
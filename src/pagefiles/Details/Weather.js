import React, { useEffect } from "react";

function Weather(props)
{
    
    // setTimeout(() => {
    //     console.log(props.main.humidity)
    //     console.log(props.main.temp)
    // }, 3000);
    

    // console.log(props.weather[0].description)
    // console.log(props.weather[0].icon)
    
    // let temp = props.main.temp
    // let description = props.weather[0].description
    // let icon = props.weather[0].icon

    const {} = props

    return (
        <center> 
            <section className='weather'>
                <h3>How's the weather in Thiruvarur</h3>
                <div>
                    {/* <div className="weather-icon">
                        <img src={props.weather[0].icon}/>
                    </div>

                    <h3>Description: {props.description}</h3>
                    
                    <h3>Temperature: {props.main.temp}</h3>
                    <h3>Humidity: {props.main.humidity}</h3>
                    <h3></h3> */}
                </div>
            </section>
        </center>
    )
}

export default Weather;
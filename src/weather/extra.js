import React from 'react'

function Extra(props){
   const {speed , chill , direction} = props.obj.current_observation.wind;
   const {visibility , humidity , pressure} = props.obj.current_observation.atmosphere;
    return(
        <div className='extraCon'>
            <div className='atmBox'>
               <img alt=""  src='/images/extra icons/wind.png'></img>
               <p  className="atmValue">{speed} kph</p>
               <p className='atmTitle'>Wind </p>
            </div>

            <div className='atmBox'>
               <img alt="" src='/images/extra icons/visibility.png'></img>
               <p  className="atmValue">{visibility} km</p>
               <p className='atmTitle'>visibility </p>
            </div>

            <div className='atmBox'>
               <img alt="" src='/images/extra icons/humidity.png'></img>
               <p className="atmValue">{humidity}%</p>
               <p className='atmTitle'>Humidity </p>
            </div>

            <div className='atmBox'>
               <img alt="" src='/images/extra icons/dashboard.png'></img>
               <p className="atmValue">{pressure} hPa</p>
               <p className='atmTitle'>Pressure </p>
            </div>

            <div className='atmBox'>
               <img alt="" src='/images/extra icons/snow.png'></img>
               <p className="atmValue">{chill}°C</p>
               <p className='atmTitle'>Chill </p>
            </div>

            <div className='atmBox'>
               <img alt="" src='/images/extra icons/wind-direction.png'></img>
               <p className="atmValue">{direction}</p>
               <p className='atmTitle'>Wind direction </p>
            </div>

        </div>
    )
}
export default Extra;
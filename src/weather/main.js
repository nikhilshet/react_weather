import React from 'react';
function Main(props){

        const curr = props.obj.current_observation;
        const loc = props.obj.location;
        const date1 = new Date().toLocaleDateString("en-in" ,{ timeZone: loc.timezone_id , day:"2-digit" , month:"2-digit" , year:"2-digit"} )
        const day = new Date().toLocaleDateString("en-us" , {timeZone:loc.timezone_id ,weekday:"long"})

        const time = new Date().toLocaleTimeString("en-us" ,{ timeZone: loc.timezone_id ,
                                                                        hour:"2-digit",
                                                                        minute:"2-digit",
                                                                        hour12: false
        })
        
        
        const ctime = new Date().toLocaleTimeString("en-us" ,{ timeZone: loc.timezone_id ,hour:"2-digit" , hour12:false})
        

        
        


    return(
        <div className='main'
            style={{background:props.bgColor}}>
            <div className='inputBox'>
            <input className='searchBar'
                    placeholder='Enter location'
                    name='location'
                    onChange={props.change}/>
            <button onClick={props.click} className='searchBtn'><img className="searchIcon" alt=" " src='/icons/search.png'/></button>
        </div>

            <h2 className='loc'> {loc.city}, {loc.country} </h2>
            <div className='tempWeather'>
                <img alt='' className="weatherIcon" src={`/images/mainicons/${curr.condition.text}.png`}></img>
                <p className='condition'>{curr.condition.text}</p>
                <p className='temp'>{curr.condition.temperature}°C</p>

                <div className='astronomy'>
                    <div  className='astroBox'>
                        <img alt="" src='/images/smallIcons/sunrise.png'></img>
                        <p>{curr.astronomy.sunrise}</p>
                    </div>
                    <div className='astroBox'>
                        <img alt='' src='/images/smallIcons/sunset.png'></img>
                        <p>{curr.astronomy.sunset}</p>
                    </div>
                </div>

            </div>
            <h2 className='main-detail date'>{day}, {date1}, {time}</h2>
        </div>
    )
}

export default Main;
import { useEffect, useState } from 'react';
import './App.css';
import tempData from './weather/temp.js';
import Main from './weather/main';
import Extra from './weather/extra';
import Daily from './weather/daily';

function App() {

  const [apiData , setApiData] = useState(tempData);

  const [locationData , setLocationData] = useState({location:"mumbai"});

  const [bg , setBg] = useState("linear-gradient(to bottom,  #0f0f42 , #330156)")
  console.log(apiData)
  function handleChange(event){
    setLocationData((prev)=>{
      return{
        ...prev,
        [event.target.name] : event.target.value
      }
    })
  }



  function handleClick(){
    const url = `https://yahoo-weather5.p.rapidapi.com/weather?location=${locationData.location}&format=json&u=c`;
    const options = {
	    method: 'GET',
	    headers: {
		    'x-rapidapi-key': '',
		    'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com'
	            }
  };
    fetch(url , options)
      .then(data => data.json())
      .then(res => setApiData(res))
      .catch(error =>{
        console.log(error)
      })
  
      const ctime = new Date().toLocaleTimeString("en-us" ,{ timeZone: apiData.location.timezone_id,hour:"2-digit" , hour12:false})
      console.log(ctime)
      console.log(apiData.location.timezone_id)
      if(ctime > 6 && ctime <= 12){
        console.log("its morinng")
        setBg("linear-gradient(to top,#91c2ff , #ffd92d)")
        }else if(ctime > 12 && ctime <= 17){
          console.log("its after")
        setBg("linear-gradient(to bottom, #fad998, #fd9eac)")
        }else if(ctime > 17 && ctime <= 19){
          console.log("its eve")
        setBg("linear-gradient(to bottom, #5a99f7, #fda4b1)")
        }else if(ctime > 19 || ctime <= 6){ 
          console.log("its night")
        setBg("linear-gradient(to bottom,  #0f0f42 , #330156)")
        }
  }
  return (
    <div className='outerBox'>
      <div className='innerBox'>
        <Main
          change = {handleChange}
          click = {handleClick}
          bgColor = {bg}
          obj={apiData}/>
        <Extra
          obj={apiData}/>
        <Daily
          obj={apiData}/>
      </div>
    </div>
  );
}

export default App;

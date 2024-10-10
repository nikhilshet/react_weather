import React from 'react';

function Daily(props){
    let arr = props.obj.forecasts

   

    function getTime(time){
      return new Date().toLocaleDateString(time , {day:"2-digit" , month:"2-digit"});
    }
      const newArr = arr.map((data)=>{
            return(
                <div className='weekDetail'>
                    <img alt='' src={`/images/smallIcons/${data.text}.png`}></img>
                    <div>

                        <p>{data.day}</p>
                        <p>{getTime(data.date)}</p>
                        <p>L-{data.low}°C</p>
                        <p>H-{data.high}°C</p>
                    </div>
                </div>
            )
      })
    return(
        <div className='weeklyBox'>
            {newArr}
        </div>
    )
}

export default Daily;
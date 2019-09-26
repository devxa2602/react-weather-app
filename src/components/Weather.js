import React from 'react';
const weather =(props)=>{
	let show=null 
  if(props.city&&props.country){
	  show=(<div className="weather__info">
		  		<p className="weather__key">Location:
					<span className="weather__value">{props.city},{props.country}</span>
			  </p>
				<p className="weather__key">Temperature: 
					<span className="weather__value">{props.Temperature}</span>
			  </p>
				<p className="weather__key">Humidity: 
					<span className="weather__value">{props.Humidity}</span>
			  </p>
				<p className="weather__key">Conditions: 
					<span className="weather__value">{props.Conditions}</span>
			  </p>
		  </div>)
	}if(props.error){
		show=(<p className="weather__error">{props.error}</p>)
	}
  return(
	  <div>
	  {show}
	  </div>
        )
    }
export default weather;
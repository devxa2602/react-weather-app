import React,{Component} from 'react';
import Titles from './components/Titles';
import Weather from './components/Weather';
import Form from './components/Form';
//import './App.css';
const API_KEY='2dd81da58f92e3571952d07b65b088e5';
class App extends Component{
	state={
        temperature:undefined,
		Humidity:undefined,
		Conditions:undefined,
		error:undefined
    }
getWeather=async(e)=>{
    e.preventDefault();
    let city=e.target.city.value;
	let country=e.target.country.value;
    const api_call=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`)
        const data=await api_call.json()
		if(city&&country){
			this.setState({
			city:city,
			country:country,
			temperature:data.main.temp,
			Humidity:data.main.humidity,
			Conditions:data.weather[0].description,
			error:""
		})
		}else{
			this.setState({
				...this.state,
				error:"Please Enter City And Country"
			})
		}
		
}
render(){
	return (
    <div className="wrapper">
			 <div className="main">
				  <div className="container">
					 <div className="row">
						 <div className="col-xs-5 title-container">
						 	<Titles/>
						 </div>
						 <div className="col-xs-7 form-container">
						 <Form getWeather={this.getWeather}/>
						 <Weather city={this.state.city}
								country={this.state.country}
								Temperature={this.state.temperature}
								Humidity={this.state.Humidity} 
								Conditions={this.state.Conditions}
								error={this.state.error}/>
						 </div>
					  </div>
				 </div>
			</div>
      </div>
  );
}
  }

export default App;

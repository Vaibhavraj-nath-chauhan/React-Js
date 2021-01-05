import React from 'react'
import "./weather.css"


class Weather extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            API : "",
            URL : "http://api.openweathermap.org/data/2.5/weather?q=",
            cityName : null ,
            Icon : null,
            Temp : null,
            isSearched : false,
        }
    }

    getData = () =>{
        var city = document.getElementById("city").value;
        var APIUrl = `${this.state.URL}${city}&appid=${this.state.API}`
        fetch(APIUrl)
            .then(res=>res.json())
            .then(res=>{
                if(res.cod !==200){
                    alert("You Enter Wrong city")
                    return false
                }
                var Temp = Math.floor(res.main.temp - 273.15)
                var Icon = res.weather[0].icon
                var IconUrl = `http://openweathermap.org/img/wn/${Icon}@2x.png`
                this.setState({
                    cityName:city,
                    Temp : Temp,
                    Icon: IconUrl,
                    isSearched : true,
                })
                console.log(city,Temp)
            })
    }

    render(){
        return(
            <div>
                <center>
                    <h1 className="heading">Weather App</h1>
                    <div className="main">
                        <p className="tag">Welcome</p>
                        <input type="text" id="city" className="city" placeholder="City Name" />
                        {
                            this.state.isSearched?<span>
                                <h2>{this.state.cityName}-{this.state.Temp}</h2>
                                <img src={this.state.Icon} />
                            </span>:""
                        }
                    </div>
                    <div>
                        <button className="but" onClick ={()=> this.getData()}>Data</button>
                    </div>
                </center>
            </div>
        )
    }
}
export default Weather;

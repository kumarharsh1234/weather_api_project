let base_url="https://api.openweathermap.org/data/2.5/weather?q=";
const apiId="appid=0c19ce963b90b74b3ce0e2c244aa36b6"
const searchBtn=document.querySelector(".search button");
async function weatherData(){
    const  input=document.querySelector(".search input").value;
    const weather=document.querySelector(".weather img");
    const temp=document.querySelector(".temp");
    const city=document.querySelector(".city");
    const humidity=document.querySelector(".humidity");
    const wind=document.querySelector(".wind");
    const res=await fetch(`${base_url}${input}&${apiId}&units=metric`);
    const data=await res.json();
    //console.log(data);
    //console.log(data.coord.lat);
    temp.innerText=Math.round(data.main.temp)+"°C";
    city.innerText=data.name;
    humidity.innerText=data.main.humidity+"%";
    wind.innerText=Math.round(data.wind.speed)+" km/h";
    if(data.weather[0].main==="Clouds"){
        weather.src="D:/7Sem/images/Clouds.png";
    }
    else if(data.weather[0].main==="Rain"){
        weather.src="D:/7Sem/images/rainy-day.png";
    }
    else if(data.weather[0].main==="Clear"){
        weather.src="D:/7Sem/images/clear.png";
    }
    else if(data.weather[0].main==="Mist"){
        weather.src="D:/7Sem/images/mist.png";
    }
    else if(data.weather[0].main==="Drizzle"){
        weather.src="D:/7Sem/images/rain.png";
    }
    else if(data.weather[0].main==="Snow"){
        weather.src="D:/7Sem/images/snowy.png";
    }

}
window.addEventListener("load",()=>{
    weatherData();
})
searchBtn.addEventListener("click",()=>{
    weatherData();
});
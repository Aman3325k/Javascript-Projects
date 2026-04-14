const Apikey = 'e02da2a25504dfe605f4706ec1432419';
document.querySelector('.weather-box').style.display = "flex";
const cityname = document.getElementById('cityName');
const temp = document.getElementById('temperature');
const button = document.querySelector('button');
const description = document.getElementById('description');
const img = document.getElementById('weatherIcon');

button.addEventListener('click',(event)=>{ 
event.preventDefault();
 
const input = document.querySelector('input').value;
    
async function getdata() {

const data = await fetch( `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${Apikey}`);
const res  = await data.json();



cityname.textContent = `${input} city`;

temp.textContent = Math.round(res.main.temp - 273) + "°C";

description.textContent = res.weather[0].description;

const imgcode = res.weather[0].icon;
img.src = `https://openweathermap.org/img/wn/${imgcode}.png`
console.log(res);
    
}

getdata();


})



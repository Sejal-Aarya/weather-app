//alert(hiii)
async function weather(city)
{
   
var apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
var apikey="7bd851f41aa8d4d1220642c55cf519d2";
var res=await fetch(apiurl+city+"&appid="+apikey);
var data=await res.json();
console.log(data);

document.getElementById("city").innerHTML=data.name;
document.getElementById("temp").innerHTML=Math.round(data.main.temp)+"℃";
document.getElementById("wind").innerHTML=data.wind.speed+"km/hr";
document.getElementById("humidity").innerHTML=data.main.humidity+"%";

}


function check()
{
var search=document.getElementById("Searchbox").value;
weather(search);
}
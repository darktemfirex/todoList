const API_KEY = "90f74952bdeae94db821c5954b5eb032";

function onGeoOK(position)
{
    console.log(position); 
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
//https://api.openweathermap.org/data/2.5/weather?lat=37.3932792&lon=126.9809835&appid=90f74952bdeae94db821c5954b5eb032    
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then(reponse => reponse.json())
              .then(data=>{
                            const weather = document.querySelector("#weather span:first-child");
                            const city = document.querySelector("#weather span:last-child");
                            city.innerText = data.name;
                            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
                            console.log(name+"  "+weather);

                          });

}


function onGeoErr()
{
    alert("can't find your position");
}

navigator.geolocation.getCurrentPosition(onGeoOK,onGeoErr);
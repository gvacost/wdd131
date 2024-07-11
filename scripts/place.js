const currentYear = new Date().getFullYear();

document.getElementById("currentyear").textContent = currentYear;

const lastModified = document.lastModified;

document.getElementById("lastmodified").textContent = "Last Modified: " + lastModified;

const temperature = 5; //in °C  
const windSpeed = 13;  //in km/h
let windChillFactor = 0;

function calculatedWindChill(temperature, windSpeed){

    windChillFactor = 13.12 + 0.6215 * temperature - 11.37 * (windSpeed**0.16) + 0.3965 * temperature * (windSpeed**0.16);
    return windChillFactor;

}

calculatedWindChill(temperature, windSpeed);

function displayWeather(){
    let weatherList = document.querySelector('.weather');
    // let title = document.createElement('h2');
    // title.textContent = 'Weather';
    // weatherList.appendChild(title);

    let list = document.createElement('ul');
    let tempItem = document.createElement('li');

    tempItem.innerText = 'Temperature: '+temperature +'°C';
    list.appendChild(tempItem);

    let conditions = document.createElement('li');
    conditions.innerText = 'Conditions: Partly Cloudy';
    list.appendChild(conditions);

    let wind_Speed = document.createElement('li');
    wind_Speed.innerText = 'Wind Speed: '+ windSpeed +'km/h';
    list.appendChild(wind_Speed);

    let wChillFactor = document.createElement('li');
    wChillFactor.innerText = 'Wind Chill:' +windChillFactor.toFixed(2) +'°C';
    list.appendChild(wChillFactor)

    weatherList.appendChild(list)

}

displayWeather();
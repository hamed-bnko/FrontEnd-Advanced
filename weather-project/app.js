function getElement(id) {
    return document.getElementById(id);
}

var temperature = getElement('temperature');
var humidity = getElement('humidity');
var windSpeed = getElement('wind-speed');
var summary = getElement('summary');
var image =  getElement("image")
var Mista = getElement("mista")
var getWeatherButton = getElement('get-weather-button');

function getGeolocationData() {
    if(navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
            getWeatherData(position.coords.longitude, position.coords.latitude);
        })
    } else {
        alert('Your browser does not support Navigator API');
    }
}

function getWeatherData(long, lat) {
    
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long + '&appid=9b8fbc52a5e4d0c87d96ed277b0822a8')
        .then(function (response) {
            console.log(response)
            return response.json();
        })
        .then(function (data) {
            displayData(data);
        })
}

function displayData(data) {
    console.log(data)
    Mista.innerHTML = data.name
    temperature.innerText = fromFtoC(data.main.temp) + ' C';
    humidity.innerText = data.main.humidity  + '%';
    windSpeed.innerText = fromMiToKm(data.wind.speed) + 'km/h' ;
    setImage(data.clouds.all)
}

function fromFtoC(t) {
    return Math.round(t - 273.15);
}

function fromMiToKm(s) {
    return s * 1.6;
}
function setImage(c){
    if (c >= 0 && c < 30) {
        image.setAttribute("src" ,"./img/sunny.png")
    }else if (c > 29 && c < 60) {   
        image.setAttribute("src" ,"./img/sun&clouds.png")
    }else {
        image.setAttribute("src" ,"./img/clouds.png")
    }
        

 
       

    
}
getWeatherButton.addEventListener('click', getGeolocationData);





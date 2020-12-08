function getElement(id) {
    return document.getElementById(id);
}
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

// Variables

var recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang = 'en-US';

var words = document.querySelector('.words');
var RcdBtn = document.querySelector('.record');
var city = document.querySelector('.city');
var temperature = getElement('temperature');
var humidity = getElement('humidity');
var windSpeed = getElement('wind-speed');
var summary = getElement('summary');
var image =  getElement("image")
var Mista = getElement("mista")
var getWeatherButton = getElement('get-weather-button');
var inputValue = ''

// weater Functions
// Get the Weather By City Name Function
function getWeatherData(city) {
    console.log(city)
    fetch('http://api.openweathermap.org/data/2.5/weather?q='+ city +'&appid=9b8fbc52a5e4d0c87d96ed277b0822a8')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {

            displayData(data);
        })
}

// Display Weather Api Data
function displayData(data) {
    console.log(data)
    Mista.innerHTML = data.name
    temperature.innerText = fromFtoC(data.main.temp) + ' C';
    humidity.innerText = data.main.humidity  + '%';
    windSpeed.innerText = fromMiToKm(data.wind.speed) + 'km/h' ;
    setImage(data.clouds.all)
}

// function Change temp from K to C
function fromFtoC(t) {
    return Math.round(t - 273.15);
}

// function change Wind Speed Mi to Km
function fromMiToKm(s) {
    return s * 1.6;
}
// Function to set Icon depend on clouds data
function setImage(c){
    if (c >= 0 && c < 30) {
        image.setAttribute("src" ,"./img/sunny.png")
    }else if (c > 29 && c < 60) {   
        image.setAttribute("src" ,"./img/sun&clouds.png")
    }else {
        image.setAttribute("src" ,"./img/clouds.png")
    }   
}


recognition.addEventListener('result', function (event) {
    city.value = Array.from(event.results)
        .map(function (result) {
            return result[0];
        })
        .map(function (value) {
            return value.transcript;
        });

        if (city.value !== "send"){
          inputValue = city.value;
        } else {
            getWeatherData(inputValue)
            city.value=""
        }
})

RcdBtn.addEventListener("mousedown" , ()=>{
    recognition.start();
})
RcdBtn.addEventListener("mouseup" , ()=>{
    recognition.stop();
})







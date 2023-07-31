"use strict"

const weatherBlock = document.querySelector('.footer__weather-block')

async function loadWeather(e){
    weatherBlock.innerHTML =    `
        <div class="weather__loading">
            <img src="src/images/loading.gif" alt="Loading..." >
        </div>`;

    const server = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=Kiev&appid=4a25e2e8df76a4bf575d269ce3687670"
    // создание запроса методом ГЕТ с адреса погоды
    const respons = await fetch(server, {
        method: 'GET',
    });
    // получаем в константу ответ сервера в формате Json
    const responsResult = await respons.json();
    //если пришел ответ,и все ок, запускаем ф-цию getWeather и передаем в нее константу с ответом(json)
    if(respons.ok){
        getWeather(responsResult);
    }else{
        // если произошла ошибка, выводим в блок погоды ответ Ошибки
        weatherBlock.innerHTML = responsResult.message;
    }
}

function getWeather(data){
    // обрабатываем и выводим данные о погоде.. получим обьект с данными о погоде.
    // обращаясь к свойствам обьекта дата, выведем нужные из них

    const location = data.name; // город
    const temp = Math.round(data.main.temp); // целое значение о темпер из массива маин
    const feelsLike = Math.round(data.main.feels_like);
    const weatherStatus = data.weather[0].main; // из массива о статусе погоды Облачно или ....
    const weatherIcon = data.weather[0].icon; // иконка

    // HTML шаблон вывода данных
    const template = `
        <div class="footer__weather">
        <div class="footer__city">${location}</div>
        <div class="footer__status">${weatherStatus}
            <div class="weather__icon">
                <img src="http://openweathermap.org/img/w/${weatherIcon}.png" alt="Clouds">
            </div>
        </div>
        
        <div class="footer__temp">Temp : <span>${temp}</span></div>
        <div class="footer__feels-like">Feels-like: <span>${feelsLike}</span></div>
    </div>`;

    weatherBlock.innerHTML = template;

}

if(weatherBlock){
    loadWeather();
}

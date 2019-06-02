function getWeather() {
    const myAppid = '57dbd56603443fed04dfc54f9fe1808b';
    const citiesWeatherIDs = ['792680', '3194360', '787657', '787050', '792078', '787595']

    const weatherRequest = new XMLHttpRequest();

    weatherRequest.onload = function() {

        const response = JSON.parse(weatherRequest.response);
        
        for (let i = 0; i < response.list.length; i++) {
            const cityWeatherCast = response.list[i];
            let cityName = cityWeatherCast.name.toLowerCase().split(' ').join('_');

            // to avoid error because there is no city ID for pristina
            if (cityName === 'novi_pazar') {
                cityName = 'pristina'
            }

            document.querySelector(`article[data-city=${cityName}] span.temperature`).innerHTML = Math.round(cityWeatherCast.main.temp);
            document.querySelector(`article[data-city=${cityName}] span.humidity`).innerHTML = Math.round(cityWeatherCast.main.humidity);
            document.querySelector(`article[data-city=${cityName}] span.pressure`).innerHTML = Math.round(cityWeatherCast.main.pressure);
            document.querySelector(`article[data-city=${cityName}] span.wind-speed`).innerHTML = Math.round(cityWeatherCast.wind.speed);
        }

    }

    weatherRequest.open('GET', `http://api.openweathermap.org/data/2.5/group?id=${citiesWeatherIDs.join(',')}&units=metric&appid=${myAppid}`);

    weatherRequest.send();
}
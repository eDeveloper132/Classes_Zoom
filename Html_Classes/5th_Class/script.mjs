const api_key = '8de00c3e50fab8039d396f04085faf77';
const getWeather = async (city) => {
    const api_url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${api_key}`;
    try {
        const response = await fetch(api_url);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        console.log(data);
        const longitude = data[0].lon;
        const latitude = data[0].lat;
        const api_url_2 = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&units=metric&appid=${api_key}`;
        try {
            const response_2 = await fetch(api_url_2);
            if (!response.ok) {
                throw new Error('Weather not found');
            }
            const data_2 = await response_2.json();
            console.log(data_2);
            return data_2;
        } catch (error) {
            console.log(error)
        }
    } catch (error) {
        console.log(error)
    }
}

const displayData = (data,city) => {
    const weatherContainer = document.getElementById('weather-details');
    weatherContainer.innerHTML = `
    <h1>${city}</h1>
    <h2>Temperature ${data.current.temp} </h2>
    <br>
    <h2>Humidity ${data.current.humidity} </h2>
    <br>
    <h2>Pressure  ${data.current.pressure} </h2>
    <br>
    <h2>Wind Speed ${data.current.wind_speed} </h2>
    <br>
    <h2>Clouds ${data.current.clouds} </h2>
    <br>
    <h2>Sunrise ${data.current.sunrise} </h2>
    <br>
    <h2>Sunset ${data.current.sunset} </h2>
    <br>
    `;
}
document.getElementById('get-weather').addEventListener('click', async() => {
    const city = document.getElementById('city-name').value;
    if (city) {
        const data = await getWeather(city);
        if(data) {
            displayData(data,city);
        }
    }
    else{
        alert('Please enter a city name');
    }
})
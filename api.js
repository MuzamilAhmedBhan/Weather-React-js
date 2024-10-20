const apiKey = '0c59daee810b6030f0e5de1053bd318f';

const getWeather = async (city) => {
    return await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
        .then((res) => res.json())
        .then((json) => {
            return json;
        })
}

export default getWeather;
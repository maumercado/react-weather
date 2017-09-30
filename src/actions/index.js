import axios from 'axios';

const WEATHER_API_KEY = '';
const BASE_URL = `http://api.openweathermap.org/data/2.5/forecast?&appid=${WEATHER_API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER'
export const FETCH_WEATHER_ERROR = 'FETCH_WEATHER_ERROR'

const fetchWeatherSuccess = (data) => {
    return {
        type: FETCH_WEATHER,
        payload: data
    }
};

const fetchWeatherError = (err) => {
    return {
        type: FETCH_WEATHER_ERROR,
        payload: err
    }
};

export const fetchWeather = (city) => {
    const url = `${BASE_URL}&q=${city},ca`;

    return (dispatch) => {
        axios.get(url)
            .then(data => {
                dispatch(fetchWeatherSuccess(data));
            })
            .catch(err => {
                dispatch(fetchWeatherError(err));
            });
    }
};
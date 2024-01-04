import {APIClient} from './axios';
import {GET_TODAYS_WEATHER, GET_WEATHER_FORECAST} from './endPoints';
import {ERROR_MESSAGES, STRINGS} from '../constants/string';

export async function getTodayWeatherApi(lat, lon) {
  const response = await APIClient().get(GET_TODAYS_WEATHER(lat, lon));
  return response;
}

export async function getWeatherForecastApi(lat, lon) {
  const response = await APIClient().get(GET_WEATHER_FORECAST(lat, lon));
  return response;
}


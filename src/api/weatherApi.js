import {APIClient} from './axios';
import {GET_TODAYS_WEATHER, GET_WEATHER_FORECAST} from './endPoints';
import {groupWeatherByDate} from './apiHelper';

export async function getTodayWeatherApi(lat, lon) {
  const response = await APIClient().get(GET_TODAYS_WEATHER(lat, lon));
  if (response?.status == 200) {
    return response?.data;
  } else {
    return response;
  }
}

export async function getWeatherForecastApi(lat, lon) {
  let cityName = '';
  const response = await APIClient().get(GET_WEATHER_FORECAST(lat, lon));
  if (response?.status == 200) {
    cityName = response?.data?.city?.name;
    const groupedWeatherData = groupWeatherByDate(
      response?.data?.list,
      cityName,
    );
    return groupedWeatherData;
  } else {
    return response;
  }
}

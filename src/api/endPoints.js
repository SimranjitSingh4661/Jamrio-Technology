import Config from 'react-native-config';

export const GET_TODAYS_WEATHER = (lat, lon) =>
  `weather?lat=${lat}&lon=${lon}&appid=${Config.WEATHER_KEY}&units=metric`;
export const GET_WEATHER_FORECAST = (lat, lon) =>
  `forecast?lat=${lat}&lon=${lon}&appid=${Config.WEATHER_KEY}&units=metric`;

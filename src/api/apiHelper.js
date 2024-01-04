// Function to group weather data by date
export const groupWeatherByDate = (weatherList, name) => {
  const groupedData = {};
  weatherList.forEach(interval => {
    // Extract date without time
    const date = interval.dt_txt.split(' ')[0];
    // Check if the date exists in the groupedData
    if (!groupedData[date]) {
      // If not, initialize it with an array containing the current interval
      groupedData[date] = [{...interval, name}];
    } else {
      // If yes, push the current interval to the existing array
      groupedData[date].push({...interval, name});
    }
  });

  return groupedData;
};

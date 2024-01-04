export const getAnimationBasedOnDayType = key => {
  switch (key?.slice?.(0, -1)) {
    case '01':
      return require('../asstes/Lottie/sun.json');
    case '02':
      return require('../asstes/Lottie/cloudy.json');
    case '03':
      return require('../asstes/Lottie/windy-day.json');
    case '04':
      return require('../asstes/Lottie/rain.json');
    case '09':
      return require('../asstes/Lottie/wind-and-rain.json');
    case '10':
      return require('../asstes/Lottie/cloudy.json');
    case '11':
      return require('../asstes/Lottie/cloud-thunderstorm.json');
    case '13':
      return require('../asstes/Lottie/snowfall.json');
    case '50':
      return require('../asstes/Lottie/sunny-windy-day.json');
    default:
      return require('../asstes/Lottie/sunny-windy-day.json');
  }
};

import React, {useState, useEffect, useRef, useCallback, Fragment} from 'react';
import {
  StyleSheet,
  AppState,
  Linking,
  Alert,
  ImageBackground,
  View,
  ActivityIndicator,
  ScrollView,
  RefreshControl,
} from 'react-native';
import {getPermission, getUserCurrentLocation} from '../../utils';
import {ErrorToast, ScreenContainer, Header} from '../../components/atoms';
import {ERROR_MESSAGES} from '../../constants/string';
import {getWeatherForecastApi} from '../../api/weatherApi';
import {WeatherCard, WeatherDayChanger} from '../../components/molecules';
import {SharedStyles} from '../../shared';
import moment from 'moment';
import {COLORS, SCREEN} from '../../constants';
import LottieView from 'lottie-react-native';
import {getAnimationBasedOnDayType} from '../../utils/weatherAnimationHelper';

const {HEIGHT, WIDTH} = SCREEN;

const WelcomeScreen = () => {
  const lastState = useRef('background');
  const [isGranted, setIsGranted] = useState(null);
  const [loading, setLoading] = useState(false);
  const [weatherLoading, setWeatherLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [dayWeather, setDayWeather] = useState([]);
  const [forecastWeatherData, setForecastWeatherData] = useState({});
  const [day, setDay] = useState(0);
  const [error, setError] = useState('');

  useEffect(() => {
    //Event listener to listen app is running on foreground or background
    const subscription = AppState.addEventListener('change', current => {
      if (lastState.current === 'background' && current === 'active') {
        if (isGranted === false) {
          setLoading(false);
        }
      }
      lastState.current = current;
    });

    //getting user location corrdinates
    fetchLocationDetails();

    return () => {
      subscription.remove();
    };
  }, [isGranted]);

  //Asking user again if he block or deny the location permission
  useEffect(() => {
    if (!loading && !isGranted) {
      setLoading(true);
      setIsGranted(null);
      getPermission().then(response => {
        if (!response.status) {
          if (response.isBlocked) {
            Alert.alert(ERROR_MESSAGES.TITLE, ERROR_MESSAGES.MESSAGE, [
              {
                text: 'OK',
                onPress: () => {
                  Linking.openSettings().then(_ => {
                    setIsGranted(response.status);
                  });
                },
              },
            ]);
          } else {
            Alert.alert(ERROR_MESSAGES.TITLE, ERROR_MESSAGES.MESSAGE, [
              {
                text: 'OK',
                onPress: () => {
                  setIsGranted(response.status);
                  setLoading(false);
                },
              },
            ]);
          }
        } else {
          setIsGranted(true);
          setLoading(true);
        }
      });
    }
  }, [isGranted, loading]);

  const fetchLocationDetails = useCallback(async () => {
    try {
      if (!isGranted) return;
      const locationRes = await getUserCurrentLocation();
      const latitude = locationRes.latitude;
      const longitude = locationRes.longitude;
      getWeatherForecastApi(latitude, longitude)
        .then(res => {
          setError('');
          setForecastWeatherData(res);
          const today = moment().add(day, 'days').format('YYYY-MM-DD');
          setDayWeather(res[today]?.[0]);
        })
        .catch(err => {
          setError(err?.errorMessage);
        })
        .finally(() => {
          setRefreshing(false);
          setWeatherLoading(false);
        });
    } catch (err) {
      setError(err || ERROR_MESSAGES.SOMETHING_WENT_WRONG);
    }
  }, [isGranted]);

  const onLeftPress = () => {
    if (!day) return;
    setDay(prev => {
      const targetDate = moment()
        .add(prev - 1, 'days')
        .format('YYYY-MM-DD');
      setDayWeather(forecastWeatherData[targetDate]?.[0]);
      return prev - 1;
    });
  };

  const onRightPress = () => {
    if (day == Object.keys(forecastWeatherData)?.length - 2) return;
    setDay(prev => {
      const targetDate = moment()
        .add(prev + 1, 'days')
        .format('YYYY-MM-DD');
      setDayWeather(forecastWeatherData[targetDate]?.[0]);
      return prev + 1;
    });
  };

  const onRefresh = () => {
    setRefreshing(true);
    // Calling again when user do Pull to refresh
    fetchLocationDetails();
  };

  return (
    <ScreenContainer>
      <ImageBackground
        resizeMode="cover"
        source={require('../../asstes/Images/weatherBG.jpg')}
        style={SharedStyles.fullFlex}>
        <View style={SharedStyles.fullFlex}>
          <Header />
          {weatherLoading ? (
            <View style={SharedStyles.fullFlexCenter}>
              <ActivityIndicator size={'large'} color={COLORS.BLACK} />
            </View>
          ) : (
            <ScrollView
              style={SharedStyles.fullFlex}
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }>
              <View style={SharedStyles.fullFlex}>
                <LottieView
                  loop
                  autoPlay
                  style={styles.animation}
                  source={getAnimationBasedOnDayType(
                    dayWeather?.weather?.[0]?.icon,
                  )}
                />
              </View>
              <WeatherCard data={dayWeather} />
            </ScrollView>
          )}
        </View>
        <WeatherDayChanger
          showLeftRed={day === 0}
          onLeftPress={onLeftPress}
          onRightPress={onRightPress}
          text={moment().add(day, 'days').format('ddd D MMM')}
          showRightRed={day === Object.keys(forecastWeatherData)?.length - 2}
        />
      </ImageBackground>
      {error && <ErrorToast message={error} />}
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  animation: {
    width: WIDTH,
    borderWidth: 11,
    height: HEIGHT / 3,
    borderColor: 'black',
  },
  inputContainer: {
    marginTop: 20,
  },
  btn: {
    marginTop: 40,
    alignItems: 'center',
  },
});

export default WelcomeScreen;

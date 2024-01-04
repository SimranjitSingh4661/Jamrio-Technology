import React, {useState, useEffect, useRef, useCallback} from 'react';
import {StyleSheet, AppState, Linking} from 'react-native';
import {getPermission, getUserCurrentLocation} from '../../utils';
import {ScreenContainer} from '../../components/atoms';

const origin = {
  latitude: 30.740009716302577,
  longitude: 76.77443675114384,
};

const WelcomeScreen = () => {
  const lastState = useRef('background');
  const [isGranted, setIsGranted] = useState(null);
  const [loading, setLoading] = useState(false);
  const [pickedLocation, setPickedLocation] = useState({});

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
            // Alert.alert({
            //   title: STRINGS.ERROR.TITLE,
            //   message: STRINGS.ERROR.MESSAGE,
            //   onSuccess: () => {
            //     Linking.openSettings().then(_ => {
            //       setIsGranted(response.status);
            //     });
            //   },
            // });
          } else {
            // Alert.alert({
            //   title: STRINGS.ERROR.TITLE,
            //   message: STRINGS.ERROR.MESSAGE,
            //   onSuccess: () => {
            //     setIsGranted(response.status);
            //     setLoading(false);
            //   },
            // });
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
      setPickedLocation({
        latitude,
        longitude,
      });
      //Call weather fetch
    } catch (err) {}
  }, [isGranted]);

  return <ScreenContainer paddingHorizontal></ScreenContainer>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

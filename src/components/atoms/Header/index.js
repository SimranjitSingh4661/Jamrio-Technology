import React from 'react';
import {StyleSheet, View} from 'react-native';
import {COLORS, SCREEN} from '../../../constants';
import StyledText from '../styledText';
import LottieView from 'lottie-react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <LottieView
        loop
        autoPlay
        style={styles.animation}
        source={require('../../../asstes/Lottie/sunny-windy-day.json')}
      />
      <StyledText textStyle={styles.title}>{'Weather App'}</StyledText>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: SCREEN.WIDTH / 5,
  },
  animation: {
    height: 70,
    width: 70,
  },
  title: {
    fontSize: 25,
    paddingLeft: 20,
    paddingBottom: 10,
    fontWeight: 'bold',
    color: COLORS.BLACK,
  },
});

import React from 'react';
import {StyleSheet, View} from 'react-native';
import {COLORS} from '../../../constants';
import {StyledText, IconButton} from '../../atoms';
import {ChevronLeft, ChevronRight} from 'lucide-react-native';

const {BLACK, SOFT_RED, WHITE} = COLORS;
const ICON_SIZE = 25;

const WeatherDayChanger = ({
  text,
  onLeftPress,
  showLeftRed = false,
  showRightRed = false,

  onRightPress,
}) => {
  return (
    <View style={styles.container}>
      <IconButton
        onPress={onLeftPress}
        containerStyles={{
          backgroundColor: showLeftRed ? SOFT_RED : WHITE,
        }}
        icon={<ChevronLeft size={ICON_SIZE} color={BLACK} />}
      />
      <StyledText textAlign="center" textStyle={styles.text} color={BLACK}>
        {text || ''}
      </StyledText>
      <IconButton
        onPress={onRightPress}
        containerStyles={{
          backgroundColor: showRightRed ? SOFT_RED : WHITE,
        }}
        icon={<ChevronRight size={ICON_SIZE} color={BLACK} />}
      />
    </View>
  );
};

export default WeatherDayChanger;

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

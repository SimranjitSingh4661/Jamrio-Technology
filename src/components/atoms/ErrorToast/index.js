import React from 'react';
import {StyleSheet, View} from 'react-native';
import {COLORS, FONT_SIZE, SCREEN, SCREEN_PADDING} from '../../../constants';
import StyledText from '../styledText';
import {SharedStyles} from '../../../shared';
import {ERROR_MESSAGES} from '../../../constants/string';

const {WIDTH} = SCREEN;

const ErrorToast = ({message}) => {
  return (
    <View style={styles.container}>
      <StyledText
        textAlign="center"
        color={COLORS.WHITE}
        textStyle={styles.errorText}>
        {message || ERROR_MESSAGES.SOMETHING_WENT_WRONG}
      </StyledText>
    </View>
  );
};

export default ErrorToast;

const styles = StyleSheet.create({
  container: {
    bottom: 20,
    borderRadius: 20,
    alignSelf: 'center',
    paddingVertical: 20,
    position: 'absolute',
    ...SharedStyles.shadow,
    backgroundColor: '#db4d4d',
    width: WIDTH - SCREEN_PADDING * 2,
  },
  errorText: {
    fontSize: FONT_SIZE.LG,
  },
});

import React from 'react';
import {StyleSheet, Pressable, View} from 'react-native';
import {COLORS} from '../../../constants';
import StyledText from '../styledText';

const {BORDER_GREY, WHITE, BUTTON_COLOR} = COLORS;

const Button = ({
  text,
  onPress,
  containerStyles,
  innerContainerStyles,
  icon,
}) => {
  return (
    <Pressable onPress={onPress} style={[styles.main, {...containerStyles}]}>
      <View style={[styles.innerContainer, innerContainerStyles]}>
        {icon}
        <StyledText textStyle={styles.text} color={WHITE}>
          {text || ''}
        </StyledText>
      </View>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  main: {
    marginTop: 10,
  },
  container: {
    padding: 1,
    position: 'relative',
    paddingHorizontal: 1,
    backgroundColor: BORDER_GREY,
  },
  innerContainer: {
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: BUTTON_COLOR,
  },
  text: {
    paddingLeft: 10,
  },
});

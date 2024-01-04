import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {COLORS} from '../../../constants';
import {SharedStyles} from '../../../shared';

const IconButton = ({onPress, containerStyles, icon}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.main, {...containerStyles}]}>
      {icon}
    </TouchableOpacity>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  main: {
    padding: 20,
    marginTop: 10,
    borderRadius: 50,
    backgroundColor: COLORS.WHITE,
    ...SharedStyles.shadow,
  },
});

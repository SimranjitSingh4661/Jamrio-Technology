import React from 'react';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {SharedStyles} from '../../../shared';
import styles from './styles';

export default ({children, center = false, paddingHorizontal = false}) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        SharedStyles.fullFlex,
        !!center && SharedStyles.center,
        !!paddingHorizontal && styles.paddingH,
        styles.background,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        },
      ]}>
      {children}
    </View>
  );
};

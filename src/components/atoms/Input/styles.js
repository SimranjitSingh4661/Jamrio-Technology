import {StyleSheet, Platform} from 'react-native';
import {COLORS} from '../../../constants';

export default StyleSheet.create({
  container: {
    borderRadius: 8,
    borderWidth: 1,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 13,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    color: COLORS.WHITE,
    paddingVertical: Platform.OS === 'ios' ? 14 : 10,
  },
});

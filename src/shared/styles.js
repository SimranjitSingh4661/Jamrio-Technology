import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  fullFlex: {
    flex: 1,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexWrap: {
    flexWrap: 'wrap',
  },
  image100: {
    width: '100%',
    height: '100%',
  },
  row: {
    flexDirection: 'row',
  },
  rowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  positionAbsolute: {
    position: 'absolute',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  justifySpaceBetween: {
    width: '100%',
    justifyContent: 'space-between',
  },
  absoluteRight: {
    position: 'absolute',
    right: 0,
  },
  absoluteLeft: {
    position: 'absolute',
    left: 0,
  },
  absoluteBottom: {
    position: 'absolute',
    bottom: 0,
  },
  shadow: {
    elevation: 5,
    shadowColor: 'black',
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowOffset: {
      width: 4,
      height: 4,
    },
  },
});

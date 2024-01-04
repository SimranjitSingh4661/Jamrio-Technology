import {Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

export const COLORS = {
  PRIMARY: '#0D0D0D',
  WHITE: 'white',
  BORDER_GREY: '#a3a0a0',
  TEXT_GREY: '#555555',
  BORDER_RED: '#A90808',
  SOFT_RED: '#e36b6b',
  BLACK: 'black',
  TEXT_GREY_LIGHT: '#6e6e6e',
  INPUT_DARK_BLUE: '#1b2330',
  BUTTON_COLOR: '#263245',
  BLUE: "#85b0f6",
  GREEN: '#0db51b'
};

export const FONT_SIZE = {
  SM: 12,
  MD: 16,
  LG: 20,
  MX: 22,
  XL: 40
};

export const SCREEN_PADDING = 20;

export const SCREEN = {
  HEIGHT: height,
  WIDTH: width,
};

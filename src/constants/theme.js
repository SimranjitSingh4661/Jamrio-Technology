import {Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

export const COLORS = {
  PRIMARY: '#0D0D0D',
  WHITE: 'white',
  BORDER_GREY: '#a3a0a0',
  TEXT_GREY: '#555555',
  BORDER_RED: '#A90808',
  BLACK: 'black',
  TEXT_GREY_LIGHT: '#6e6e6e',
  INPUT_DARK_BLUE: '#1b2330',
  BUTTON_COLOR: '#263245',
};

export const FONT_SIZE = {
  SM: 12,
  MD: 16,
  LG: 20,
  MX: 22
};

export const SCREEN_PADDING = 20;

export const SCREEN = {
  HEIGHT: height,
  WIDTH: width,
};

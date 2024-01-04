import React from 'react';
import {View, Text, StyleProp, TextStyle, ViewStyle} from 'react-native';
import {COLORS, FONT_SIZE} from '../../../constants';

interface StyleTextProps {
  children: React.ReactNode;
  size?: number;
  color?: string;
  textAlign?: 'left' | 'right' | 'center';
  textStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  onLayout?: () => void;
  lineHeight?: number;
  onPress?: () => void;
}

const StyledText: React.FC<StyleTextProps> = ({
  children,
  onLayout,
  size = FONT_SIZE.MD,
  color = COLORS.PRIMARY,
  lineHeight,
  textStyle,
  textAlign = 'left',
  onPress = undefined,
  containerStyle,
  ...props
}) => {
  const style = {
    color: color,
    fontSize: size,
    lineHeight,
    textAlign,
  };

  return (
    <View onLayout={onLayout} style={containerStyle}>
      <Text onPress={onPress} style={[style, textStyle]} {...props}>
        {children}
      </Text>
    </View>
  );
};

export default StyledText;

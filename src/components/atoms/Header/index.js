import React, {Fragment} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {ArrowLeft} from 'lucide-react-native';
import {COLORS} from '../../../constants';
import StyledText from '../styledText';
import {useNavigation} from '@react-navigation/native';
import {SharedStyles} from '../../../shared';

const Header = ({showBack = false, title}) => {
  const navigation = useNavigation();
  const onGoBackPress = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onGoBackPress} style={styles.backIcon}>
        <ArrowLeft size={30} color={COLORS.BLACK} />
      </TouchableOpacity>

      <StyledText textStyle={styles.title}>{title || ''}</StyledText>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backIcon: {
    padding: 5,
    borderRadius: 50,
    ...SharedStyles.shadow,
    backgroundColor: COLORS.WHITE,
  },
  title: {
    fontSize: 20,
    paddingLeft: 20,
    color: COLORS.BLACK,
  },
});

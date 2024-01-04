import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {StyledText} from '../../atoms';
import {SharedStyles} from '../../../shared';
import {COLORS, FONT_SIZE} from '../../../constants';
import {
  ArrowDown,
  ArrowUp,
  Droplets,
  MapPinIcon,
  Wind,
} from 'lucide-react-native';

const {BLACK, TEXT_GREY, BLUE, GREEN, BORDER_RED} = COLORS;
const ICON_SIZE = 22;

const WeatherCard = ({data}) => {
  return (
    <View style={styles.container}>
      <View style={styles.rowCenter}>
        <StyledText color={TEXT_GREY} textStyle={styles.tempText}>{`${
          data?.main?.temp || 0
        }°C`}</StyledText>
        {!!data?.weather?.[0]?.icon && (
          <Image
            style={styles.tinyLogo}
            source={{
              uri: `https://openweathermap.org/img/wn/${data?.weather?.[0]?.icon}@4x.png`,
            }}
          />
        )}
      </View>
      {data?.name && (
        <View style={styles.rowCenter}>
          <MapPinIcon color={BLACK} size={ICON_SIZE} />
          <StyledText color={TEXT_GREY} textStyle={styles.locName}>
            {/* {data?.name} */}
            {"Delhi"}
          </StyledText>
        </View>
      )}
      <View style={[styles.rowCenter, styles.marginTop]}>
        {data?.main?.feels_like && (
          <StyledText color={TEXT_GREY} textStyle={styles.feelLike}>
            {`Feels like ${data?.main?.feels_like}°C   -   `}
          </StyledText>
        )}
        {!!data?.weather?.[0]?.icon && (
          <StyledText color={TEXT_GREY} textStyle={styles.feelLike}>
            {data?.weather?.[0]?.main}
          </StyledText>
        )}
      </View>
      <View style={[styles.rowCenter, styles.marginTop]}>
        <View style={[SharedStyles.rowCenter, styles.paddingRight]}>
          <Droplets color={BLUE} size={ICON_SIZE} />
          <StyledText color={TEXT_GREY} textStyle={styles.humidityText}>{`${
            data?.main?.humidity || 0
          }%`}</StyledText>
        </View>
        <View style={SharedStyles.rowCenter}>
          <Wind color={BLUE} size={ICON_SIZE} />
          <StyledText color={TEXT_GREY} textStyle={styles.humidityText}>{`${
            data?.wind?.speed || 0
          } km/h`}</StyledText>
        </View>
      </View>
      <View style={[styles.rowCenter, styles.marginTop]}>
        <View style={[SharedStyles.rowCenter, styles.paddingRight]}>
          <ArrowUp color={GREEN} size={ICON_SIZE} />
          <StyledText color={TEXT_GREY} textStyle={styles.humidityText}>{`${
            data?.main?.temp_max || '0'
          }°C`}</StyledText>
        </View>
        <View style={SharedStyles.rowCenter}>
          <ArrowDown color={BORDER_RED} size={ICON_SIZE} />
          <StyledText color={TEXT_GREY} textStyle={styles.humidityText}>{`${
            data?.main?.temp_min || '0'
          }°C`}</StyledText>
        </View>
      </View>
    </View>
  );
};

export default WeatherCard;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 40,
  },
  tinyLogo: {
    width: 80,
    height: 80,
  },
  paddingRight: {
    paddingRight: 40,
  },
  marginTop: {
    marginTop: 10,
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  feelLike: {
    fontWeight: 'bold',
    fontSize: FONT_SIZE.MD,
  },
  humidityText: {
    paddingLeft: 5,
    fontWeight: 'bold',
    paddingBottom: 4,
    fontSize: FONT_SIZE.LG,
  },
  locName: {
    fontSize: FONT_SIZE.MX,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  tempText: {
    fontSize: FONT_SIZE.XL,
    fontWeight: 'bold',
  },
});

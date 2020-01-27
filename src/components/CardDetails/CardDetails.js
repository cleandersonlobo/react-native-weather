import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { THEME_COLORS } from 'styles/base';
import Card from './Card';
import styles from './styles';

const CardDetails = ({ currentObservation }) => {
  const { wind, atmosphere, astronomy } = currentObservation;
  return (
    <>
      <View style={styles.cards}>
        <Card iconName="pressure" title={`${atmosphere.pressure} mb`} subtitle="Pressure" />
        <Card
          iconName="speed"
          title={`${wind.speed}km/h`}
          subtitle="East"
          iconColor={THEME_COLORS.speed}
        />
        <Card
          iconName="humidity"
          title="1122 mb"
          subtitle="Humidity"
          iconColor={THEME_COLORS.humidity}
        />
      </View>
      <View style={styles.cards}>
        <Card
          iconName="visibility"
          title={atmosphere.visibility}
          subtitle="Visibility"
          iconColor={THEME_COLORS.visibility}
        />
        <Card
          iconName="sunset"
          title={astronomy.sunset}
          subtitle="Sunset"
          iconColor={THEME_COLORS.sunset}
        />
        <Card
          iconName="sunrise"
          title={astronomy.sunset}
          subtitle="Sunrise"
          iconColor={THEME_COLORS.sunrise}
        />
      </View>
    </>
  );
};

CardDetails.propTypes = {
  currentObservation: PropTypes.shape({
    wind: PropTypes.shape({
      speed: PropTypes.number,
    }),
    atmosphere: PropTypes.shape({
      humidity: PropTypes.number,
      visibility: PropTypes.number,
      pressure: PropTypes.number,
    }),
    astronomy: PropTypes.shape({
      sunrise: PropTypes.string,
      sunset: PropTypes.string,
    }),
  }),
};

export default CardDetails;

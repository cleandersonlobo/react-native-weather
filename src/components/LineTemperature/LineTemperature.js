/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { IconSVG } from 'components';
import { THEME_COLORS } from 'styles/base';
import styles from './styles';

const codeDays = { 0: 'Today', 1: 'Tomorrow' };

const LineTemperature = ({ forecast, index = 0 }) => {
  const day = codeDays[index] || forecast.day;
  return (
    <View style={styles.container}>
      <View style={styles.viewIcon}>
        <IconSVG
          name={forecast.code}
          {...styles.icon}
          fill={!index ? THEME_COLORS.yellow : '#FFF'}
        />
      </View>
      <View style={styles.column}>
        <View style={styles.row}>
          <Text style={styles.day}>
            {day} - {forecast.text}
          </Text>
          <Text style={styles.condition}>
            {forecast.high}°/{forecast.low}°
          </Text>
        </View>
        <View style={styles.border} />
      </View>
    </View>
  );
};

LineTemperature.propTypes = {
  index: PropTypes.number,
  forecast: PropTypes.shape({
    day: PropTypes.string,
    text: PropTypes.string,
    high: PropTypes.number,
    low: PropTypes.number,
    code: PropTypes.number,
  }),
};

export default React.memo(LineTemperature);

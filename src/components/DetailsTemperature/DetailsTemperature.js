import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { IconSVG } from 'components';
import styles from './styles';
import { fahrenheitToCelsius } from '../../helpers/index';

const DetailsTemperature = ({ observation }) => (
  <View style={styles.column}>
    <View style={[styles.row, styles.rowSpaceBetween]}>
      <View style={styles.row}>
        <Text style={styles.temperature}>{fahrenheitToCelsius(observation.temperature.now)}</Text>
        <IconSVG name="celsius" width={30} height={30} style={styles.icon} />
      </View>
      <Text style={styles.condition}>{observation.conditionDescription}</Text>
    </View>
    <View style={styles.content}>
      <View style={[styles.row, styles.rowSpaceEvenly]}>
        <Text style={styles.text}>Today</Text>
        <View style={styles.paddingView} />
        <Text style={styles.textTemp}>
          {fahrenheitToCelsius(observation.temperature.high)}°/
          {fahrenheitToCelsius(observation.temperature.low)}°
        </Text>
      </View>
    </View>
  </View>
);

DetailsTemperature.propTypes = {
  observation: PropTypes.shape({
    conditionDescription: PropTypes.string,
    temperature: PropTypes.shape({
      now: PropTypes.number,
      high: PropTypes.number,
      low: PropTypes.number,
    }),
  }),
};

export default React.memo(DetailsTemperature);

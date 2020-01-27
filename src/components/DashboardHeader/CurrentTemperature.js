import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { IconSVG } from 'components';
import styles from './styles';

const CurrentTemperature = ({ condition }) => (
  <View style={styles.column}>
    {/* Row */}
    <View style={styles.row}>
      <Text style={styles.title}>{condition.temperature}</Text>
      <IconSVG name="celsius" width={20} height={20} style={styles.icon} />
    </View>
    <Text style={styles.subtitle}>{condition.text}</Text>
  </View>
);

CurrentTemperature.propTypes = {
  condition: PropTypes.shape({
    text: PropTypes.string,
    temperature: PropTypes.number,
  }),
};

export default React.memo(CurrentTemperature);

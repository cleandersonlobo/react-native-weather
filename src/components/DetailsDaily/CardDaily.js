import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { IconSVG } from 'components';
import { hourToString } from 'helpers';
import { THEME_COLORS } from 'styles/base';
import styles from './styles';

const CardDaily = ({ daily }) => {
  const { observationTime, conditionDescription, conditionCode } = daily;
  return (
    <View style={styles.column}>
      <Text style={styles.time}>{hourToString(observationTime.hour)}</Text>
      <IconSVG
        name={30}
        height={30}
        width={30}
        fill={
          conditionDescription.includes('Sunny') || conditionCode === 30
            ? THEME_COLORS.yellow
            : THEME_COLORS.white
        }
      />
      <Text style={styles.condition}>{conditionDescription}</Text>
    </View>
  );
};

CardDaily.propTypes = {
  daily: PropTypes.shape({
    conditionCode: PropTypes.number,
    conditionDescription: PropTypes.string,
    temperature: PropTypes.shape({
      now: PropTypes.number,
    }),
    observationTime: PropTypes.shape({
      day: PropTypes.number,
      weekday: PropTypes.number,
      hour: PropTypes.number,
    }),
  }),
};

export default CardDaily;

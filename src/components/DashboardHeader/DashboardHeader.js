import React from 'react';
import PropTypes from 'prop-types';
import { View, Dimensions } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { LineTemperature } from 'components';
import { THEME_COLORS, THEME_STYLES } from 'styles/base';
import CurrentTemperature from './CurrentTemperature';
import styles from './styles';

const DashboardHeader = ({ forecasts, condition }) => {
  return (
    <>
      <View style={styles.header}>
        <CurrentTemperature condition={condition} />
        <View style={styles.divider} />
        {forecasts.slice(0, 3).map((forecast, index) => (
          <LineTemperature key={forecast.date} forecast={forecast} index={index} />
        ))}
      </View>
      <View style={THEME_STYLES.backgroundWhite}>
        <Svg
          width={Dimensions.get('window').width}
          height={260 * (Dimensions.get('window').width / 1125)}
          viewBox="0 0 1125 260"
          fill={THEME_COLORS.primaryColor}>
          <Path d="M-21,0 L1149,0 C954,173.333333 759,260 564,260 C369,260 174,173.333333 -21,0 Z" />
        </Svg>
      </View>
    </>
  );
};

DashboardHeader.propTypes = {
  forecasts: PropTypes.instanceOf(Array),
  condition: PropTypes.instanceOf(Object),
};

export default React.memo(DashboardHeader);

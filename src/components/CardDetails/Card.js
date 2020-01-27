import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { IconSVG } from 'components';
import { THEME_COLORS } from 'styles/base';
import styles from './styles';

const Card = ({ iconName, title, subtitle, iconColor = THEME_COLORS.red }) => {
  return (
    <View style={styles.card}>
      <View style={styles.content}>
        <IconSVG name={iconName} fill={iconColor} height={35} width={35} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
};

Card.propTypes = {
  iconName: PropTypes.string,
  iconColor: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  subtitle: PropTypes.string,
};

export default React.memo(Card);

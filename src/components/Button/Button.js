import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableWithoutFeedback, Text } from 'react-native';
import styles from './styles';

const Button = ({ children, ...restProps }) => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        hitSlop={{ top: 10, bottom: 10, left: 20, right: 20 }}
        accessibilityTraits="button"
        underlayColor="rgba(8,72,164,0.1)"
        {...restProps}>
        <View style={styles.button}>
          <Text style={styles.text}>{children}</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.any, PropTypes.string]),
};

export default Button;

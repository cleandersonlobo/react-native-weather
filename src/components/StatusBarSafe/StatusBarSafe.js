import React from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView, StyleSheet, Dimensions } from 'react-native';
import { THEME_COLORS } from 'styles/base';

const BASE_HEIGHT = 100;

const styles = StyleSheet.flatten({
  width: Dimensions.get('window').width,
  top: 0,
  backgroundColor: THEME_COLORS.primaryColor,
  position: 'absolute',
  zIndex: -1,
});
const StatusBarSafe = ({ offset = 0 }) => {
  return <SafeAreaView style={[styles, { height: BASE_HEIGHT + -offset }]} />;
};

StatusBarSafe.propTypes = {
  offset: PropTypes.number,
};

export default StatusBarSafe;

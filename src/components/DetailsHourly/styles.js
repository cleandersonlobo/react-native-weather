/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';
import { THEME_COLORS } from 'styles/base';

export default StyleSheet.create({
  column: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
    minHeight: 100,
    width: 80,
  },
  condition: {
    color: THEME_COLORS.white,
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10,
    textAlign: 'center',
  },
  container: {
    marginTop: 40,
    marginVertical: 20,
  },
  lineChart: {
    height: 80,
    marginVertical: 20,
    paddingBottom: 60,
    paddingLeft: 0,
    paddingRight: 40,
  },
  time: {
    color: THEME_COLORS.white,
    fontSize: 16,
    letterSpacing: 0.5,
    marginBottom: 10,
    textAlign: 'center',
  },
});

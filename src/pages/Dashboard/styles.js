/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';
import { THEME_COLORS } from 'styles/base';

export default StyleSheet.create({
  cards: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 30,
  },
  container: {
    backgroundColor: THEME_COLORS.primaryColor,
    flex: 1,
  },
  header: {
    backgroundColor: THEME_COLORS.primaryColor,
    paddingVertical: 5,
  },
  safeArea: { backgroundColor: '#FFFFFF', flex: 1 },
});

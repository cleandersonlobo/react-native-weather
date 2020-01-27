/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';
import { THEME_COLORS } from 'styles/base';

export default StyleSheet.create({
  button: {
    backgroundColor: THEME_COLORS.secondaryColor,
    borderRadius: 50,
    paddingHorizontal: 40,
    paddingVertical: 20,
  },
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  text: { color: '#fff', fontSize: 18 },
});

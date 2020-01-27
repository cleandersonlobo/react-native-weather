/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';
import { THEME_COLORS } from 'styles/base';

export default StyleSheet.create({
  column: { alignItems: 'center', justifyContent: 'center', paddingHorizontal: 20, paddingTop: 10 },
  divider: {
    height: 20,
  },
  header: {
    backgroundColor: THEME_COLORS.primaryColor,
    paddingVertical: 5,
  },
  icon: { left: 90, marginTop: 20, position: 'absolute' },
  row: { flexDirection: 'row', justifyContent: 'center' },
  subtitle: { color: 'white', fontSize: 20, fontWeight: '600' },
  title: { color: 'white', fontSize: 80, fontWeight: '600' },
});

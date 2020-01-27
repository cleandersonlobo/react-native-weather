/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  column: { paddingHorizontal: 20, paddingTop: 20 },
  condition: { color: 'white', fontSize: 26, fontWeight: '600' },
  content: {
    marginTop: 20,
  },
  icon: { left: 10, marginTop: 10 },
  paddingView: {
    paddingHorizontal: 20,
  },
  row: { flexDirection: 'row' },
  rowSpaceBetween: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  temperature: { color: 'white', fontSize: 80, fontWeight: 'bold' },
  text: { color: 'white', fontSize: 20, fontWeight: 'bold' },
  textTemp: { color: 'white', fontSize: 18, fontWeight: '500', letterSpacing: 1.5 },
});

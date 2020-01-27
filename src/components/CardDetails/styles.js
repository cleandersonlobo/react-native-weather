/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';
import { THEME_COLORS } from 'styles/base';

export default StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 5,
    margin: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 0.7,
    width: 90,
  },
  cards: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    minHeight: 120,
  },
  subtitle: { color: THEME_COLORS.text, fontSize: 12, opacity: 0.82 },
  title: { color: THEME_COLORS.text },
});

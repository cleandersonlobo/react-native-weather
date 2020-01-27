/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  border: {
    backgroundColor: '#fff',
    height: 1,
    marginVertical: 8,
    opacity: 0.5,
  },
  column: { flex: 1 },
  columnEnd: { flexDirection: 'row', justifyContent: 'flex-end' },
  condition: { color: '#fff', fontSize: 16, letterSpacing: 1, paddingRight: 5 },
  container: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  day: { alignItems: 'center', color: '#fff', fontSize: 16, letterSpacing: 0.5 },
  icon: { height: 30, width: 30 },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewIcon: { marginRight: 15 },
});

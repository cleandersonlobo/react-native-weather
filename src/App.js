import React from 'react';
import { StatusBar } from 'react-native';
import './reactotron';
import { THEME_COLORS } from 'styles/base';
import Routes from './routes';

const App = () => (
  <>
    <StatusBar barStyle="light-content" />
    <Routes style={{ backgroundColor: THEME_COLORS.primaryColor }} />
  </>
);

export default App;

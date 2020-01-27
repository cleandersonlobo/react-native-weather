// eslint-disable-next-line import/no-extraneous-dependencies
import Reactotron from 'reactotron-react-native';

Reactotron.useReactNative().connect();
// __DEV__ === false;

console.tron = Reactotron.log;

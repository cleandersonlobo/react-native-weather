import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { THEME_COLORS } from 'styles/base';
import { BackButton } from 'components';
import DetailsWeather from 'pages/DetailsWeather/DetailsWeather';
import Dashboard from 'pages/Dashboard/Dashboard';

const config = {
  animation: 'spring',
  config: {
    duration: 120,
    stiffness: 2000,
    damping: 300,
    mass: 2,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const AppNavigator = createStackNavigator(
  {
    dashboad: {
      screen: Dashboard,
    },
    details: {
      screen: DetailsWeather,
    },
  },
  {
    initialRouteName: 'dashboad',
    defaultNavigationOptions: {
      transitionSpec: {
        open: config,
        close: config,
      },
      headerBackImage: BackButton,
      headerTintColor: THEME_COLORS.primaryColor,
      headerStyle: {
        backgroundColor: THEME_COLORS.primaryColor,
        borderBottomWidth: 0,
        elevation: 0,
        shadowOpacity: 0,
      },
      headerTitleStyle: {
        color: THEME_COLORS.white,
        fontSize: 20,
        letterSpacing: 0.6,
      },
    },
  }
);

export default createAppContainer(AppNavigator);

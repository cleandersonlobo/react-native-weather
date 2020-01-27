import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, SafeAreaView, View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { THEME_COLORS } from 'styles/base';
import { DetailsTemperature, LoadingSuspense } from 'components';
import styles from './styles';

const DetailsDaily = React.lazy(() => import('components/DetailsDaily/DetailsDaily'));
const DetailsHourly = React.lazy(() => import('components/DetailsHourly/DetailsHourly'));

const DetailsWeather = ({ navigation }) => {
  const {
    state: { params },
  } = navigation;
  const { observation, forecasts } = params;
  const { hourly, daily } = forecasts;

  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      locations={[0.1, 1]}
      colors={[THEME_COLORS.primaryColor, THEME_COLORS.lineGradientBottom]}
      style={styles.container}>
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <DetailsTemperature observation={observation} />
          <React.Suspense fallback={<LoadingSuspense />}>
            <DetailsHourly hourlys={hourly} />

            <View style={styles.content}>
              <Text style={styles.description}>{daily.length} - day forecast</Text>
            </View>

            <DetailsDaily dailys={daily} />
          </React.Suspense>
        </SafeAreaView>
      </ScrollView>
    </LinearGradient>
  );
};

DetailsWeather.navigationOptions = ({ navigation }) => {
  const location = navigation.getParam('location', { displayName: 'Details' });
  return {
    title: location.displayName,
  };
};

DetailsWeather.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.shape({
        location: PropTypes.shape({
          displayName: PropTypes.string,
        }),
        observation: PropTypes.instanceOf(Object),
        forecasts: PropTypes.shape({
          hourly: PropTypes.instanceOf(Array),
          daily: PropTypes.instanceOf(Array),
        }),
      }),
    }),
  }),
};

export default DetailsWeather;

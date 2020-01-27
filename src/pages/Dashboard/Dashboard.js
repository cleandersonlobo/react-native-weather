import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { View, SafeAreaView, ScrollView } from 'react-native';
import DATA_WEATHER from 'assets/paris.json';
import DETAILS_WEATHER from 'assets/details_weather.json';
import { StatusBarSafe, Button, ButtonNavBar, DashboardHeader, CardDetails } from 'components';
import styles from './styles';

const Dashboard = ({ navigation }) => {
  const [offset, setOffset] = useState(0);
  const { current_observation, forecasts, location } = DATA_WEATHER;
  const { condition } = current_observation;
  const _onScroll = useCallback(({ nativeEvent }) => {
    setOffset(nativeEvent.contentOffset.y);
  }, []);

  useEffect(() => {
    navigation.setParams({ city: location.city });
  }, []);

  const handleOnPress = useCallback(() => {
    navigation.navigate('details', DETAILS_WEATHER);
  }, []);

  return (
    <View style={styles.safeArea}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        scrollEventThrottle={16}
        onScroll={_onScroll}>
        <SafeAreaView style={styles.safeArea}>
          <DashboardHeader forecasts={forecasts} condition={condition} />
          <CardDetails currentObservation={current_observation} />
          <Button onPress={handleOnPress}>More Details</Button>
        </SafeAreaView>
      </ScrollView>
      <StatusBarSafe offset={offset} />
    </View>
  );
};

Dashboard.navigationOptions = ({ navigation }) => {
  const title = navigation.getParam('city', 'Weather');
  return {
    title,
    headerLeft: () => <ButtonNavBar name="add" iconType="icons" />,
    headerRight: () => <ButtonNavBar name="dots-vertical" />,
  };
};

Dashboard.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    dispatch: PropTypes.func,
    setParams: PropTypes.func,
    getParam: PropTypes.func,
    pop: PropTypes.func,
    goBack: PropTypes.func,
    state: PropTypes.shape({
      params: PropTypes.shape({
        statusSimulado: PropTypes.string,
      }),
    }),
  }),
};

export default Dashboard;

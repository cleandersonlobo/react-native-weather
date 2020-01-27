import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList, ScrollView } from 'react-native';
import { fahrenheitToCelsius } from 'helpers';
import styles from './styles';
import CardHourly from './CardHourly';
import LineChartHourly from './LineChartHourly';

const DetailsHourly = ({ hourlys }) => {
  const data = hourlys.map(it => fahrenheitToCelsius(it.temperature.now));
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        <FlatList
          horizontal
          scrollEnabled={false}
          showsHorizontalScrollIndicator={false}
          data={hourlys}
          keyExtractor={item => item.observationTime.timestamp}
          renderItem={({ item }) => <CardHourly hourly={item} />}
        />
        <LineChartHourly data={data} />
      </View>
    </ScrollView>
  );
};

DetailsHourly.propTypes = {
  hourlys: PropTypes.arrayOf(
    PropTypes.shape({
      conditionCode: PropTypes.number,
      conditionDescription: PropTypes.string,
      temperature: PropTypes.shape({
        now: PropTypes.number,
      }),
      observationTime: PropTypes.shape({
        day: PropTypes.number,
        weekday: PropTypes.number,
        hour: PropTypes.number,
      }),
    })
  ),
};

export default DetailsHourly;

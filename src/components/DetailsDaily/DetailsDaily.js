import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList, ScrollView } from 'react-native';
import { fahrenheitToCelsius } from 'helpers';
import styles from './styles';
import CardDaily from './CardDaily';
import LineChartDaily from './LineChartDaily';

const DetailsDaily = ({ dailys }) => {
  const dataHight = dailys.map(it => fahrenheitToCelsius(it.temperature.high));
  const dataLow = dailys.map(it => fahrenheitToCelsius(it.temperature.low));

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} scrollEventThrottle={0.1}>
      <View style={styles.container}>
        <FlatList
          horizontal
          scrollEnabled={false}
          showsHorizontalScrollIndicator={false}
          data={dailys}
          keyExtractor={item => item.observationTime.timestamp}
          renderItem={({ item }) => <CardDaily daily={item} />}
        />
        <LineChartDaily data={dataHight} dataLow={dataLow} />
      </View>
    </ScrollView>
  );
};

DetailsDaily.propTypes = {
  dailys: PropTypes.arrayOf(
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

export default DetailsDaily;

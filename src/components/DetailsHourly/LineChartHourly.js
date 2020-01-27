import React from 'react';
import PropTypes from 'prop-types';
import { LineChart } from 'react-native-chart-kit';
import styles from './styles';

const LineChartHourly = ({ data }) => {
  return (
    <LineChart
      data={{
        labels: data,
        datasets: [
          {
            data,
          },
        ],
      }}
      withHorizontalLabels={false}
      width={data.length * 80 + 40} // from react-native
      height={30}
      count={data.length}
      fromZero
      xAxisLabel="°C"
      xLabelsOffset={-5}
      withShadow={false}
      withInnerLines={false}
      withOuterLines={false}
      chartConfig={{
        backgroundGradientFromOpacity: 0,
        backgroundGradientToOpacity: 0,
        strokeWidth: 3,
        color: () => `#ffa726`,
        labelColor: () => `rgba(255, 255, 255, 1)`,
        propsForDots: {
          r: '5',
        },
        propsForLabels: {
          fontWeight: 'bold',
          fontSize: 16,
          letterSpacing: 0.5,
        },
      }}
      bezier
      style={styles.lineChart}
    />
  );
};

LineChartHourly.propTypes = {
  data: PropTypes.instanceOf(Array),
};

export default LineChartHourly;

import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native-svg';
import { LineChart } from 'react-native-chart-kit';
import { THEME_COLORS } from 'styles/base';
import styles from './styles';

const LineChartDaily = ({ data, dataLow }) => {
  return (
    <LineChart
      data={{
        labels: dataLow,
        datasets: [
          {
            data,
            color: () => THEME_COLORS.orange,
            labelColor: () => `rgba(255, 255, 255, 1)`,
          },
          {
            data: dataLow,
            color: () => THEME_COLORS.lineLow,
            labelColor: () => `rgba(255, 255, 255, 1)`,
          },
        ],
      }}
      decorator={values => {
        const {
          width,
          verticalLabelRotation,
          formatXLabel = xLabel => xLabel,
          paddingRight,
          data: datas,
        } = values;
        const horizontalOffset = 0;
        const labels = datas[0].data;
        const { xAxisLabel = '', hidePointsAtIndex = [] } = values;
        const fac = 1;
        return labels.map((label, i) => {
          if (hidePointsAtIndex.includes(i)) {
            return null;
          }
          const x =
            (((width - paddingRight) / labels.length) * i + paddingRight + horizontalOffset) * fac;
          return (
            <Text
              origin={`${x}, ${12}`}
              rotation={verticalLabelRotation}
              key={Math.random()}
              x={x}
              y={12}
              fill="#FFFFFF"
              fontSize={16}
              fontWeight="bold"
              letterSpacing={0.5}
              textAnchor={verticalLabelRotation === 0 ? 'middle' : 'start'}>
              {`${formatXLabel(label)}${xAxisLabel}°C`}
            </Text>
          );
        });
      }}
      withHorizontalLabels={false}
      width={data.length * 80 + 40} // from react-native
      height={100}
      fromZero
      count={data.length}
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
      style={styles.lineChart}
    />
  );
};

LineChartDaily.propTypes = {
  data: PropTypes.instanceOf(Array),
  dataLow: PropTypes.instanceOf(Array),
};

export default React.memo(LineChartDaily);

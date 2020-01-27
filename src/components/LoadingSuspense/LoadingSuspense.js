import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import styles from './styles';

const LoadingSuspense = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={16} color="#FFF" />
      <Text style={styles.text}>Loading</Text>
    </View>
  );
};

export default LoadingSuspense;

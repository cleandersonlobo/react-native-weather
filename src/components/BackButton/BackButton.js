import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

Icon.loadFont();
const BackButton = () => <Icon style={styles.icon} name="chevron-left" />;

export default BackButton;

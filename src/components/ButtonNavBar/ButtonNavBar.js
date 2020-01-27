/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight } from 'react-native';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

IconMaterialCommunityIcons.loadFont();
IconMaterialIcons.loadFont();
const Icon = ({ type, ...restProps }) =>
  ({
    material: <IconMaterialCommunityIcons {...restProps} />,
    icons: <IconMaterialIcons {...restProps} />,
  }[type] || <IconMaterialCommunityIcons {...restProps} />);

const ButtonNavBar = props => {
  const { name, onPress, iconType, size, backButton } = props;
  return (
    <TouchableHighlight
      style={backButton ? styles.backButton : styles.button}
      activeOpacity={0.5}
      underlayColor="rgba(255, 255, 255, 0.1)"
      onPress={onPress}>
      <Icon type={iconType} name={name} size={size} style={styles.iconHeader} color="#fff" />
    </TouchableHighlight>
  );
};

ButtonNavBar.defaultProps = {
  onPress: () => {},
  iconType: 'material',
  size: 30,
  backButton: false,
};

ButtonNavBar.propTypes = {
  name: PropTypes.string,
  onPress: PropTypes.func,
  backButton: PropTypes.bool,
  size: PropTypes.number,
  iconType: PropTypes.oneOf(['material', 'icons']),
};

export default ButtonNavBar;

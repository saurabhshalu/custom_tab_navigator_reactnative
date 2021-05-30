import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
const IconWithLabel = props => {
  const {iconName, iconSize = 25, activeColor, labelText, focused} = props;

  const textStyle = {
    color: focused ? activeColor : '#393e46',
    fontWeight: focused ? 'bold' : 'normal',
  };

  return (
    <View style={styles.container}>
      <Icon
        name={iconName}
        size={iconSize}
        color={focused ? activeColor : '#393e46'}
      />
      <Text style={textStyle}>{labelText}</Text>
    </View>
  );
};

IconWithLabel.propTypes = {
  iconName: PropTypes.string.isRequired,
  iconSize: PropTypes.number,
  activeColor: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  focused: PropTypes.bool,
};

export default IconWithLabel;

const styles = StyleSheet.create({
  container: {alignItems: 'center'},
});

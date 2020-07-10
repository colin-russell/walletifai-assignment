import React from 'react';
import { TouchableHighlight, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const Button = (props) => {
  const styles = StyleSheet.create({
    button: {
      borderRadius: 20,
      borderColor: 'black',
      borderWidth: 2,
      padding: 10,
      paddingHorizontal: 15,
      backgroundColor: props.backgroundColor,
      margin: 10,
    },
    text: {
      fontSize: 16,
      color: props.fontColor,
    },
  });

  Button.propTypes = {
    labelText: PropTypes.string,
    style: PropTypes.object,
    backgroundColor: PropTypes.string,
    fontColor: PropTypes.string,
    onPress: PropTypes.func,
  };
  return (
    <TouchableHighlight
      style={{ ...styles.button, ...props.style }}
      onPress={props.onPress}
    >
      <Text style={styles.text}>{props.labelText}</Text>
    </TouchableHighlight>
  );
};

export default Button;

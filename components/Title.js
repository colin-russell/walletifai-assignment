import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const Title = (props) => {
  return (
    <View style={props.style}>
      <Text style={{ ...styles.text, color: props.textColor }}>
        {props.text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    textShadowColor: 'black',
    textShadowRadius: 5,
    textShadowOffset: {
      width: 1,
      height: 2,
    },
  },
});

Title.propTypes = {
  text: PropTypes.string,
  style: PropTypes.object,
  textColor: PropTypes.string,
};

export default Title;

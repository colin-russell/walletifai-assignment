import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Title = (props) => {
  return (
    <View style={props.style}>
      <StyledText color={props.textColor}>{props.text}</StyledText>
    </View>
  );
};

const StyledText = styled.Text`
  font-size: 40px;
  text-shadow-color: black;
  text-shadow-radius: 5px;
  text-shadow-offset: 1px 2px;
  color: ${(props) => props.color};
`;

Title.propTypes = {
  text: PropTypes.string,
  style: PropTypes.array,
  textColor: PropTypes.string,
};

export default Title;

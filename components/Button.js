import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = (props) => {
  return (
    <StyledButton
      style={props.style}
      onPress={props.onPress}
      backgroundColor={props.backgroundColor}
    >
      <StyledText fontColor={props.fontColor}>{props.labelText}</StyledText>
    </StyledButton>
  );
};

const StyledButton = styled.TouchableHighlight`
  border-radius: 20px;
  border-color: black;
  border-width: 2px;
  padding: 10px;
  padding-horizontal: 15px;
  margin: 10px;
  background-color: ${(props) => props.backgroundColor};
`;
const StyledText = styled.Text`
  font-size: 16px;
  color: ${(props) => props.fontColor};
`;

Button.propTypes = {
  labelText: PropTypes.string,
  style: PropTypes.object,
  backgroundColor: PropTypes.string,
  fontColor: PropTypes.string,
  onPress: PropTypes.func,
};

export default Button;

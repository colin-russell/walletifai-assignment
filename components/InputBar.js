import React, { useState } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputBar = (props) => {
  const [text, setText] = useState('');

  const handleTextChange = (newText) => {
    setText(newText);
  };

  return (
    <KeyboardAvoidingView behavior={'padding'}>
      <Container style={props.style} width={props.width}>
        <Label>{props.label}</Label>
        <Input
          secureTextEntry={props.hideCharacters}
          value={text}
          placeholder={props.placeholderText}
          onChangeText={(newText) => handleTextChange(newText)}
        />
      </Container>
    </KeyboardAvoidingView>
  );
};

const Container = styled.View`
  align-items: center;
  background-color: white;
  border-radius: 20px;
  border-width: 5px;
  padding: 5px;
  margin: 5px;
  width: ${(props) => props.width}px;
`;
const Label = styled.Text`
  margin: 5px;
`;
const Input = styled.TextInput`
  width: 100%;
  border-width: 1px;
  border-color: grey;
  border-radius: 20px;
  height: 40px;
  padding: 10px;
  margin-bottom: 10px;
  margin-top: 10px;
  background-color: white;
`;

InputBar.propTypes = {
  label: PropTypes.string,
  hideCharacters: PropTypes.bool,
  placeholderText: PropTypes.string,
  width: PropTypes.number,
  style: PropTypes.object,
};

export default InputBar;

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
import PropTypes from 'prop-types';

const InputBar = (props) => {
  const [text, setText] = useState('');

  const handleTextChange = (newText) => {
    setText(newText);
    console.log(text);
  };

  return (
    <KeyboardAvoidingView
      style={{ ...styles.container, ...props.style, width: props.width }}
    >
      <Text style={styles.text}>{props.label}</Text>
      <TextInput
        style={styles.input}
        secureTextEntry={props.hideCharacters}
        value={text}
        placeholder={props.placeholderText}
        onChangeText={(newText) => handleTextChange(newText)}
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  text: {
    margin: 5,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 20,
    height: 40,
    padding: 10,
    marginBottom: 10,
    marginTop: 10,
    backgroundColor: 'white',
  },
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 5,
    padding: 5,
    margin: 5,
  },
});

InputBar.propTypes = {
  label: PropTypes.string,
  hideCharacters: PropTypes.bool,
  placeholderText: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  style: PropTypes.object,
};

export default InputBar;

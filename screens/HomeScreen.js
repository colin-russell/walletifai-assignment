import React, { useState } from 'react';
import { Dimensions, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components';

import InputBar from '../components/InputBar';
import Title from '../components/Title';
import Button from '../components/Button';
import mockLogin from '../modules/api/mockLogin';

const screenWidth = Dimensions.get('window').width;

export default function HomeScreen() {
  var [usernameInput, setUsernameInput] = useState('');
  var [passwordInput, setPasswordInput] = useState('');
  const dispatch = useDispatch();

  const handleLogInPress = async () => {
    mockLogin({ username: usernameInput, password: passwordInput }).then(
      (response) => {
        if (response[1] == true) {
          // successfully logged in
          Alert.alert('Success', response[0], [{ text: 'OK' }], {
            cancelable: false,
          });
          dispatch({ type: 'LOG_IN', username: usernameInput });
        } else {
          // unsuccessful
          Alert.alert('Trouble Logging In', response[0], [{ text: 'OK' }], {
            cancelable: false,
          });
        }
      }
    );
  };

  return (
    <Container>
      <StatusBar style='auto' />
      <TitleStyled text={'Walletifai Login'} textColor={'#b3ffff'} />
      <Input
        label={'Username:'}
        width={screenWidth * 0.75}
        placeholderText={'enter your username'}
        onChangeText={(text) => setUsernameInput(text)}
      />
      <Input
        label={'Password:'}
        width={screenWidth * 0.75}
        placeholderText={'enter your password'}
        hideCharacters={true}
        onChangeText={(text) => setPasswordInput(text)}
      />
      <Button
        labelText={'Log In'}
        backgroundColor={'#b3ffff'}
        fontColor={'#006666'}
        onPress={handleLogInPress}
      />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #b3ffb3;
  align-items: center;
  justify-content: center;
`;
const TitleStyled = styled(Title)`
  padding-top: -50px;
  margin-bottom: 25px;
`;
const Input = styled(InputBar)`
  background-color: #d9ffb3;
`;

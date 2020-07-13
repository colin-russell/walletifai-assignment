import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components';

import InputBar from '../components/InputBar';
import Title from '../components/Title';
import Button from '../components/Button';

const screenWidth = Dimensions.get('window').width;

export default function HomeScreen() {
  const handleLogInPress = () => {
    console.log('log in press');
  };

  return (
    <Container>
      <StatusBar style='auto' />
      <TitleStyled text={'Walletifai Login'} textColor={'#b3ffff'} />
      <InputBar
        style={styles.input}
        label={'Username:'}
        width={screenWidth * 0.75}
        placeholderText={'enter your username'}
      />
      <InputBar
        style={styles.input}
        label={'Password:'}
        width={screenWidth * 0.75}
        placeholderText={'enter your password'}
        hideCharacters={true}
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

const styles = StyleSheet.create({
  title: {
    paddingTop: -50,
    paddingBottom: 25,
  },
  input: {
    backgroundColor: '#d9ffb3',
  },
});

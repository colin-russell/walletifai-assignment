import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import InputBar from '../components/InputBar';
import Title from '../components/Title';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <Title
        style={styles.title}
        text={'Walletifai Login'}
        textColor={'#b3ffff'}
      />
      <InputBar
        style={styles.input}
        label={'Username:'}
        width={'75%'}
        placeholderText={'enter your username'}
      />
      <InputBar
        style={styles.input}
        label={'Password:'}
        width={'75%'}
        placeholderText={'enter your password'}
        hideCharacters={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b3ffb3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    paddingTop: -50,
    paddingBottom: 25,
  },
  input: {
    backgroundColor: '#d9ffb3',
  },
});

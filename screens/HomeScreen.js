import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import SearchBar from '../components/InputBar';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <SearchBar style={styles.input} label={'username:'} width={'75%'} />
      <SearchBar style={styles.input} label={'password:'} width={'75%'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009900',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: '#009999',
  },
});

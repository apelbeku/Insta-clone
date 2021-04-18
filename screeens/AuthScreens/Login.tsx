import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Singup from './Singup'

export default function Login({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <StatusBar style="auto" />
      <TouchableOpacity onPress={() => navigation.navigate('Singup') } >
        <Text>Switch</Text>
      </TouchableOpacity>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

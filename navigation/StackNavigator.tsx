import React from 'react'   

import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator'

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} >
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
    </Stack.Navigator>
  );
}
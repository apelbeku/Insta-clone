import * as React from 'react';
import { View, Text } from 'react-native';
// import AppLoading from 'expo'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { useFonts } from '@use-expo/font';

import Login from '../screeens/AuthScreens/Login'
import Signup from '../screeens/AuthScreens/Signup'
import Welcome from '../screeens/AuthScreens/Welcome'
import StackNavigator from './StackNavigator'
import ProfilePicture from '../screeens/AuthScreens/ProfilePicture'

const Stack = createStackNavigator();

export default function App() {
    let [fontsLoaded] = useFonts({

        'logo-font': require('../assets/fonts/Handlee-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return <View/>;
    } else {
        return (
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }} >
                    <Stack.Screen name='Welcome' component={Welcome}/>
                    <Stack.Screen name='Login' component={Login}/>
                    <Stack.Screen name='Signup' component={Signup} />
                    <Stack.Screen name='StackNavigator' component={StackNavigator} />
                    <Stack.Screen name='ProfilePicture' component={ProfilePicture} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}
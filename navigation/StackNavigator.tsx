import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import * as firebase from 'firebase'


export default function App() {
    return (
        <View style={{flex:1, backgroundColor:'white', justifyContent: 'center', alignItems: 'center'}}>
            <Text>You are now logged in</Text>

            <TouchableOpacity onPress={()=> firebase.auth().signOut()}>
                <Text style={{color:'blue'}}>Log me out</Text>
            </TouchableOpacity>
        </View>
    )
}
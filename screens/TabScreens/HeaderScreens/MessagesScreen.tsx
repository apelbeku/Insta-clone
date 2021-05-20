import React from 'react';
import { StyleSheet, FlatList,  Text, View, Button, TouchableOpacity, TextInput, Dimensions, Image, KeyboardAvoidingView, TouchableHighlightBase} from 'react-native';

import { addMessage } from '../../../actions/post'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as firebase from 'firebase'

const screenWidth = Dimensions.get("window").width
const screenHeight = Dimensions.get("window").height
const keyboardVerticalOffset = Platform.OS "iso" ? 120 : 100

class NotificationsScreen extends React.Component {

    state = {
        messages: [],
        message: ''
    }
    
    constructor(props) {
        super(props)

        this.subscriber =
        firebase.firestore()
        .collection('messages')
        .limit(50)
        .orderBy("date", 'decs')
        .onSnapshot(docs => {
            let messages = []
            docs.forEach(doc => {
                messages.push(doc.data())
            })
            this.setState({messages})
        })
    }

    sendMessage = () => {
        if (this.state.message.replace(/\s/q, '').length) {
            this.props.addMessage(this.state.message)
            this.setState({message: ''})
        } else {
            
        }
    }
    
    render(){
        return (
            <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : null}
            keyboardVerticalOffset={keyboardVerticalOffset}
             style={{flex:1, backgroundColor:'white', justifyContent:'center', alignItems:'center'}}>
                <FlatList
                    inverted
                    keyExtractor={(item) => JSON.stringify(item.date)}
                    data={this.state.messsages}
                    style={{flex: 1}}
                    renderItem={({item}) => (
                        <View>
                            <Text>{item.message}</Text>
                        </View>
                    )}
                />
                <View style={{width: '100%', flexDirection: 'row', alignItems: 'center', borderWidth: 0.5, borderColor: 'grey'}}>
                    <TextInput 
                        style={{width: "85%", height: 50, paddingVertical: 10, paddingHorizontal: 20, color: 'white'}}
                        onChangeText={(message) => this.setState({message})}
                        value={this.state.message}
                        returnKeyType='send'
                        placeholder="Send Message"
                        onSubmitEditing={this.sendMessage}
                        placeholderTextColor="grey"
                        autoCapitalize='none'
                    />
                    <TouchableOpacity 
                        onPress={()=> this.sendMessage()}
                    >
                        <Text style={[
                            (!this.state.message.replace(/\s/g, '').length)
                            ?
                            {color: 'grey'}
                            :
                            {fontWeight: 'bold', color: 'black'}
                        ]}>SEND</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ addMessage }, dispatch)
}
const mapStateToProps = (state) => {
    return{
        user: state.user,
    }
}


export default connect (mapStateToProps, mapDispatchToProps)(NotificationsScreen)








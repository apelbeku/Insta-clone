import { Component } from 'react'
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Dimensions, TouchableOpacity} from 'react-native';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Permissions from 'expo-permissions'
import * as ImagePicker from 'expo-image-picker'
import { uploadPhoto } from '../../actions/index'
import { updatePhoto } from '../../actions/user'

const screenWidth = Dimensions.get("window").width
const screenHeight = Dimensions.get("window").height

class ProfliePicture extends React.Component {

  openLibrary = async () => {
    try {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
      if (status === 'granted') {
        const image = await ImagePicker.launchImageLibraryAsync({
          allowsEditing:true
        })
        if (!image.cancelled) {
          const url = await this.props.uploadPhoto(image)
          this.props.updatePhoto(url)
        }
      }
    } catch (e) {
      alert(e)
    }
  }
  
  render(){
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image source={require('../../assets/backgrounds/far.jpg')} style={{   position:'absolute', zIndex:-1, width:screenWidth, height:screenHeight+60}} />
            <View style={{justifyContent: 'center', alignItems: 'center', bottom: 100}}>
              <Text style={{fontWeight: 'bold', fontSize: 24, color: 'black', margin: 15}}>Choose a profile picture</Text>
              {
                (this.props.user.photo == undefined) ?
                <TouchableOpacity
                  onPress={()=> this.openLibrary()}
                >
                  <View style={{width: screenWidth*.5, height: screenWidth*.5, borderRadius: screenWidth*.5, backgroundColor: 'beige' }} />
                </TouchableOpacity>
                :
                <TouchableOpacity
                  onPress={()=> this.openLibrary()}
                >
                  <Image
                    source={{uri: this.props.user.photo}}
                    style={{width: screenWidth*.5, height: screenWidth*.5, borderRadius: screenWidth*.5, backgroundColor: 'beige' }}
                  />
                </TouchableOpacity>
              }
              <TouchableOpacity
                style={{margin: 25, padding: 20, borderRadius: 10, backgroundColor: 'rgba(255,255,255,0.4)', width: screenWidth*.9, alignItems: 'center'}}
                onPress={() => this.props.navigation.navigate('Signup')}
              >
                <Text style={{color: 'black', fontWeight: 'bold', fontSize: 24,}}>Continue</Text>
              </TouchableOpacity>
            </View>
        </View>
    );
  }
}


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ uploadPhoto, updatePhoto }, dispatch)
}
const mapStateToProps = (state) => {
  return{
    user: state.user,
  }
}
export default connect (mapStateToProps, mapDispatchToProps)(ProfliePicture)
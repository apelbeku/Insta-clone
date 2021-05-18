import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { FontAwesome } from '@expo/vector-icons'
import { uploadPost, getPosts } from '../actions/post'
import PostCheckout from '../screeens/TabSreens/Upload/PostCheckout'
import ProfilePicture from '../screeens/AuthScreens/ProfilePicture'

const Stack = createStackNavigator();

class  MyStack extends React.Component {
  uploadPost = () => {
    this.props.navigation.navigate('TabNavigator')
    alert('Posted')
    this.props.uploadPost()
    this.props.getPosts()
  }
  
  render() {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
        <Stack.Screen name="PostCheckout" component={PostCheckout} 
          options={{
            headerShown: true,
            headerTitle: 'see your post',
            headerRight: () => (
              <TouchableOpacity style={{margin: 20, flexDirection: 'row'}}
                onPress={() => this.uploadPost()}
              >
                <Text style={{color: 'blue', fontWeight: 'bold', fontSize: 20, marginHorizontal: 5, bottom: 0}}>POST</Text>
                <FontAwesome name="check" color={'blue'} size={25} style={{top:2}} />
              </TouchableOpacity>
              ),
          }} 
        />
      </Stack.Navigator>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ uploadPost, getPosts }, dispatch)
}
const mapStateToProps = (state) => {
  return{
    user: state.user,
    post: state.post
  }
}


export default connect (mapStateToProps, mapDispatchToProps)(MyStack)
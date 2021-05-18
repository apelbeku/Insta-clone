import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput, Dimensions, Image, FlatList} from 'react-native';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getUser } from '../../actions/user'
import { getPost } from '../../actions/post'
import PostComponent from '../Components/PostComponent'

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

class HomeScreen extends React.Component {
  componentDidMount = () => {
    this.props.getPost()
  }
  
    render(){
      return(
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
            <FlatList
              data={this.props.feed}
              keyExtractor={(item) => JSON.stringify(item.uid)}
              renderItem={({item}) => {
                <PostComponent
                  item={item}
                />
              }}
            />
          </View>
      )
    }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getUser, getPost }, dispatch)
}
const mapStateToProps = (state) => {
  return{
    user: state.user,
    psot: state.post
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(HomeScreen)
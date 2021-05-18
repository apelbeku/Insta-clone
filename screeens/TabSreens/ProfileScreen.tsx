import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput, Dimensions, Image} from 'react-native';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getUser } from '../../actions/user'

class ProfileScreen extends React.Component {
    render(){
      return(
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
            <Text style={{fontSize:35, fontFamily:'logo-font', marginVertical:60, color:'#0095f6'}}>ProfileScreen</Text>
          </View>
      )
    }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getUser }, dispatch)
}
const mapStateToProps = (state) => {
  return{
    user: state.user,
  }
}


export default connect (mapStateToProps, mapDispatchToProps)(ProfileScreen)
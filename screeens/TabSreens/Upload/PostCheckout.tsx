import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput, Dimensions, Image, ScrollView} from 'react-native';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateDescription } from '../../../actions/post'

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

class PostCheckout extends React.Component {
    render(){
      return(
          <View style={{ flex: 1, alignItems: 'center' }} >
            {/* <Text style={{fontSize:35, fontFamily:'logo-font', marginVertical:60, color:'#0095f6'}}>PostCheckout</Text> */}
            <TextInput 
                placeholderTextColor={'black'}
                placeholder={"Type your description in here"}
                onChangeText={input => this.props.updateDescription(input)}
                value={this.props.post.description}
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)', fontSize: 20, paddingVertical: 10, paddingHorizontal: 15, margin: 20, width: '95%', borderRadius: 10 }}
            />
            <View>
                <ScrollView
                    horizontal={true}
                    pagingEnabled={true}
                >
                    {
                        this.props.post.photos?.map(
                            e=> <Image source={{ uri: e }} style={{ width: screenWidth, height: 360}} />
                        )
                    }
                </ScrollView>
            </View>
          </View>
      )
    }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ updateDescription }, dispatch)
}
const mapStateToProps = (state) => {
  return{
    user: state.user,
    post: state.post
  }
}


export default connect (mapStateToProps, mapDispatchToProps)(PostCheckout)
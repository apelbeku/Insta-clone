import React, { Component } from 'react'
import { Text, View, Image, Dimensions } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const screenWidth = Dimensions.get("window").width
const screenHeight = Dimensions.get("window").height

export default class PostComponent extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <View>
              <Image source={{uri: this.props.item.photos[0]}} style={{width: screenWidth, height: 360}} />
            </View>
        )
    }
}
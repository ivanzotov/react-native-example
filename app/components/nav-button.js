import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';

export default class NavButton extends Component {
  render() {
    return (
      <TouchableOpacity
      onPress={this.props.onPress}>
        <Text style={[styles.button, this.props.right ? styles.button_r : {}]}>{this.props.name}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
    color: '#fff',
    fontSize: 14,
    textAlign: 'left'
  },

  button_r: {
    textAlign: 'right'
  }
});

import React, { Component } from 'react';
import {
  View, Text
} from 'react-native';

export default class NewsLists extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.Header}</Text>
      </View>
    );
  }
}

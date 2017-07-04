import React, { Component } from 'react';
import {
  View, Text
} from 'react-native';
import { connect } from 'react-redux';
// import Card from './common/Card';

export default class NewsLists extends Component {
  componentWillMount() {
    const ds = new NewsLists.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows();
  }

  render() {
    return (
      <View>
        <Text>{this.props.Header}</Text>
      </View>
    );
  }
}

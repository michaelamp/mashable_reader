import React, { Component } from 'react';
import {
  ListView
} from 'react-native';
import { connect } from 'react-redux';
// import Card from './common/Card';

class NewsLists extends Component {
  componentWillMount() {
    const ds = new NewsLists.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(this.props.articles);
  }

  render() {
    return (
      <ListView
        dataSource={this.dataSource}
      />
    );
  }
}

const mapStateToProps = state => {
  return { articles: state.articles };
};

export default connect(mapStateToProps)(NewsLists);

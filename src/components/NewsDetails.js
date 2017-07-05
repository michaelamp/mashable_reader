import React, { Component } from 'react';
import {
  ScrollView, Image
} from 'react-native';
import { connect } from 'react-redux';
import Header from './common/Header';
import Card from './common/Card';
import CardSection from './common/CardSection';

class NewsDetails extends Component {
  componentWillMount() {

  }

  render() {
    return (
      <ScrollView>
        <Header headerText={this.props.articles.title} />
        <Card>
          <Image
            source={{ url: this.props.articles.urlToImage }}
          />
        </Card>
        <CardSection>
          {this.props.articles.description}
        </CardSection>
      </ScrollView>
    );
  }
}

export default connect(null)(NewsDetails);

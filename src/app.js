import React, { Component } from 'react';
import {
  View
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import Header from './components/common/Header';
import NewsLists from './components/NewsLists';

class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Header headerText={'News Lists'} />
          <NewsLists />
        </View>
      </Provider>
    );
  }
}

export default App;

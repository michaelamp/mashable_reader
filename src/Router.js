import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import NewsLists from './components/NewsLists';
import NewsDetails from './components/NewsDetails';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="main">
        <Scene key="newsLists" component={NewsLists} title="News Lists" />
        <Scene key="newsDetails" component={NewsDetails} title="" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;

import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import PhotoList from 'components/PhotoList';
import TopicListItem from 'components/TopicListItem';
import TopicList from 'components/TopicList';
import TopNavigationBar from 'components/TopNavigationBar';
import HomeRoute from 'routes/HomeRoute';

// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      <HomeRoute/>
      {/* { Array.from(Array(3)).map((_, index) => <PhotoListItem key ={index}/>) } */}
    </div>
  );
};

export default App;

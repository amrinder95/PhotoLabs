import React from 'react';
import HomeRoute from 'routes/HomeRoute';
import './App.scss';

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

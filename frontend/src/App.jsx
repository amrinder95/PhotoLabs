import React, { useState } from 'react';
import HomeRoute from 'routes/HomeRoute';
import photos from "mocks/photos";
import topics from "mocks/topics";
import './App.scss';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [showModal, setShowModal] = useState(false);
  const handlePhotoClick = () => {
    setShowModal(true);
  }
  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} handlePhotoClick={handlePhotoClick}/>
      {showModal && <PhotoDetailsModal closeModal={() => setShowModal(false)} />}
      {/* { Array.from(Array(3)).map((_, index) => <PhotoListItem key ={index}/>) } */}
    </div>
  );
};

export default App;

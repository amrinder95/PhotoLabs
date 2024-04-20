import React, { useState } from 'react';
import HomeRoute from 'routes/HomeRoute';
import photos from "mocks/photos";
import topics from "mocks/topics";
import './App.scss';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

// Note: Rendering a single component to build components in isolation


const App = () => {
  const {showModal, modalPhoto, toggleModal, likedPhotos, toggleFavourite, isModal, setShowModal} = useApplicationData();

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} toggleModal={toggleModal} likedPhotos={likedPhotos} toggleFavourite={toggleFavourite} isModal={isModal}/>
      {showModal && <PhotoDetailsModal closeModal={() => toggleModal(null)} isModal={isModal} photo={modalPhoto} likedPhotos={likedPhotos} toggleFavourite={toggleFavourite} toggleModal={toggleModal} photos={photos}/>}
      {/* { Array.from(Array(3)).map((_, index) => <PhotoListItem key ={index}/>) } */}
    </div>
  );
};

export default App;

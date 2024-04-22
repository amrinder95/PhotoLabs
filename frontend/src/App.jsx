import React from 'react';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';
import './App.scss';

// Note: Rendering a single component to build components in isolation


const App = () => {
  const {showModal, modalPhoto, toggleModal, likedPhotos, toggleFavourite, photoData, topicData, handleTopicSelect} = useApplicationData();
  return (
    <div className="App">
      <HomeRoute photos={photoData} topics={topicData} toggleModal={toggleModal} likedPhotos={likedPhotos} toggleFavourite={toggleFavourite} isModal={showModal} handleTopicSelect={handleTopicSelect}/>
      {showModal && <PhotoDetailsModal closeModal={() => toggleModal(null)} isModal={showModal} modalPhoto={modalPhoto} likedPhotos={likedPhotos} toggleFavourite={toggleFavourite} toggleModal={toggleModal} photos={photoData}/>}
      {/* { Array.from(Array(3)).map((_, index) => <PhotoListItem key ={index}/>) } */}
    </div>
  );
};

export default App;

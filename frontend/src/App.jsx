import React from 'react';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import LikedPhotosModal from 'routes/LikedPhotosModal';
import useApplicationData from 'hooks/useApplicationData';
import './App.scss';

// Note: Rendering a single component to build components in isolation


const App = () => {
  const {allPhotos, showModal, modalPhoto, toggleModal, likedPhotos, toggleFavourite, photoData, topicData, handleTopicSelect, toggleLikedPhotos, showLikedPhotos} = useApplicationData();
  return (
    <div className="App">
      <HomeRoute photos={photoData} topics={topicData} toggleModal={toggleModal} likedPhotos={likedPhotos} toggleFavourite={toggleFavourite} isModal={showModal} handleTopicSelect={handleTopicSelect} toggleLikedPhotos={toggleLikedPhotos}/>
      {showModal && <PhotoDetailsModal closeModal={() => toggleModal(null)} isModal={showModal} modalPhoto={modalPhoto} likedPhotos={likedPhotos} toggleFavourite={toggleFavourite} toggleModal={toggleModal} photos={photoData}/>}
      {showLikedPhotos && <LikedPhotosModal closeModal={() => toggleLikedPhotos(null)} likedPhotos={likedPhotos} toggleFavourite={toggleFavourite} isModal={showLikedPhotos} photos={allPhotos}/>}
    </div>
  );
};

export default App;

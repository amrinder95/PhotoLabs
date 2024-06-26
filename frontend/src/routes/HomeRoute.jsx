import React from 'react';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = ({photos, topics, toggleModal, likedPhotos, toggleFavourite, handleTopicSelect, toggleLikedPhotos}) => {

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} likedPhotos={likedPhotos} handleTopicSelect={handleTopicSelect} toggleLikedPhotos={toggleLikedPhotos}/>
      <PhotoList photos={photos} toggleFavourite={toggleFavourite} likedPhotos={likedPhotos} toggleModal={toggleModal}/>
    </div>
  );
};

export default HomeRoute;

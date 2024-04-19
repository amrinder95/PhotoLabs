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
  // const [showModal, setShowModal] = useState(false);
  // const [modalPhoto, setModalPhoto] = useState(null);
  // const toggleModal = (photo) => {
  //   setShowModal(true);
  //   setModalPhoto(photo);
  // }
  // const isModal = showModal;
  // const [likedPhotos, setLikedPhotos] = useState([]);
  // const toggleFavourite = (id) => {
  //   //add logic to update liked photo state, maybe add/remove to array containing liked photos?
  //   const likedPhoto = likedPhotos.includes(id);
  //   likedPhoto ? setLikedPhotos(prevLikedPhotos => prevLikedPhotos.filter(e => e !== id) ): setLikedPhotos(prevLikedPhotos => [...prevLikedPhotos, id]);
  // }

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} toggleModal={toggleModal} likedPhotos={likedPhotos} toggleFavourite={toggleFavourite} isModal={isModal}/>
      {showModal && <PhotoDetailsModal closeModal={() => setShowModal(false)} isModal={isModal} photo={modalPhoto} likedPhotos={likedPhotos} toggleFavourite={toggleFavourite} toggleModal={toggleModal} photos={photos}/>}
      {/* { Array.from(Array(3)).map((_, index) => <PhotoListItem key ={index}/>) } */}
    </div>
  );
};

export default App;

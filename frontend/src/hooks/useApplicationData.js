// Our useApplicationData Hook will return an object with four keys representing the following items:

// The state object will contain the entire state of the application.
// The updateToFavPhotoIds action can be used to set the favourite photos.
// The setPhotoSelected action can be used when the user selects a photo.
// The onClosePhotoDetailsModal action can be used to close the modal.
import { useState } from 'react';


function useApplicationData() {
  const [showModal, setShowModal] = useState(false);
  const [modalPhoto, setModalPhoto] = useState(null);
  const [likedPhotos, setLikedPhotos] = useState([]);
  const toggleModal = (photo) => {
    setShowModal(true);
    setModalPhoto(photo);
  };
  const toggleFavourite = (id) => {
    const likedPhoto = likedPhotos.includes(id);
    likedPhoto ? setLikedPhotos(prevLikedPhotos => prevLikedPhotos.filter(e => e !== id) ): setLikedPhotos(prevLikedPhotos => [...prevLikedPhotos, id]);
  };
  const isModal = showModal;
  return {
    showModal,
    modalPhoto,
    likedPhotos,
    toggleModal,
    toggleFavourite,
    isModal,
    setShowModal
  };
};


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

export default useApplicationData;
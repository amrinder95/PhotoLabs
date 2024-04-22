import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";


const PhotoList = ({photos, toggleFavourite, likedPhotos, toggleModal, isModal}) => {
  const containerOfPhotos = photos.map((photo) => <PhotoListItem key={photo.id} id={photo.id} photo={photo} toggleFavourite={toggleFavourite} likedPhotos={likedPhotos} toggleModal={toggleModal}/>)
  return (
    <ul className={`photo-list ${isModal? 'modal' : ''}`}>
      {containerOfPhotos}
    </ul>
  );
};

export default PhotoList;

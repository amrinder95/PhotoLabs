import React from "react";
import PhotoListItem from "./PhotoListItem";


import "../styles/PhotoList.scss";


const PhotoList = ({photos, toggleFavourite, likedPhotos, toggleModal}) => {
  const containerOfPhotos = photos.map((photo) => <PhotoListItem key={photo.user.id} id={photo.user.id} photo={photo} toggleFavourite={toggleFavourite} likedPhotos={likedPhotos} toggleModal={toggleModal}/>)
  return (
    <ul className="photo-list">
      {containerOfPhotos}
    </ul>
  );
};

export default PhotoList;

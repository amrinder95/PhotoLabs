import React from "react";
import PhotoListItem from "./PhotoListItem";


import "../styles/PhotoList.scss";


const PhotoList = ({photos, toggleFavourite, likedPhotos, handlePhotoClick}) => {
  const containerOfPhotos = photos.map((photo) => <PhotoListItem key={photo.user.id} id={photo.user.id} photo={photo} toggleFavourite={toggleFavourite} likedPhotos={likedPhotos} handlePhotoClick={handlePhotoClick}/>)
  return (
    <ul className="photo-list">
      {containerOfPhotos}
    </ul>
  );
};

export default PhotoList;

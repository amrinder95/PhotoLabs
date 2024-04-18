import React from "react";
import PhotoListItem from "./PhotoListItem";


import "../styles/PhotoList.scss";


const PhotoList = ({photos, handleClick, likedPhotos}) => {
  const containerOfPhotos = photos.map((photo) => <PhotoListItem key={photo.user.id} id={photo.user.id} photo={photo} handleClick={handleClick} likedPhotos={likedPhotos}/>)
  return (
    <ul className="photo-list">
      {containerOfPhotos}
    </ul>
  );
};

export default PhotoList;

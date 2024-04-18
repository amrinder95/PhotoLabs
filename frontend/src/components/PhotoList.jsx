import React from "react";
import PhotoListItem from "./PhotoListItem";
import photos from "mocks/photos";

import "../styles/PhotoList.scss";


const PhotoList = () => {
  const containerOfPhotos = photos.map((photo) => <PhotoListItem key={photo.user.id} photo={photo}/>)
  return (
    <ul className="photo-list">
      {containerOfPhotos}
    </ul>
  );
};

export default PhotoList;

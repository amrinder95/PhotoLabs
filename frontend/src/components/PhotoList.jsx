import React from "react";
import PhotoListItem from "./PhotoListItem";


import "../styles/PhotoList.scss";


const PhotoList = (props) => {
  const containerOfPhotos = props.photos.map((photo) => <PhotoListItem key={photo.user.id} photo={photo}/>)
  return (
    <ul className="photo-list">
      {containerOfPhotos}
    </ul>
  );
};

export default PhotoList;

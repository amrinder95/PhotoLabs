import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({photo, toggleFavourite, likedPhotos, toggleModal, isModal, id}) => {
  return (
    <div className={`photo-list__item ${isModal ? 'modal' : ''}`}>
      <PhotoFavButton toggleFavourite={toggleFavourite} likedPhotos={likedPhotos} photo={photo} id={id}/>
      <img className="photo-list__image" src={photo.urls.regular} onClick={() => toggleModal(photo)}></img>
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={photo.user.profile}></img>
        <div className="photo-list__user-info">
          <p className="">{photo.user.name}</p>
          <p className="photo-list__user-location">{photo.location.city}, {photo.location.country}</p>
        </div>
      </div>
    </div>
  )
};

export default PhotoListItem;

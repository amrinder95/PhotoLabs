import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = ({closeModal, photo, likedPhotos, toggleFavourite, photos, toggleModal}) => {
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={closeModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className='photo-details-modal__top-bar'>
        <div>
          <PhotoFavButton toggleFavourite={toggleFavourite} likedPhotos={likedPhotos} id={photo.id}/>
          <img className="photo-details-modal__image" src={photo.urls.regular} onClick={() => toggleModal(photo)}></img>
          <div className='photo-details-modal__photographer-details'>
            <img className="photo-details-modal__photographer-profile" src={photo.user.profile}></img>
            <div className="photo-details-modal__photographer-info">
              <p className="">{photo.user.name}</p>
              <p className="photo-details-modal__photographer-location">{photo.location.city}, {photo.location.country}</p>
            </div>
          </div>
          <div className="photo-details-modal__header">
            <h5>Similar Photos</h5>
              <div className='photo-details-modal__images'>
                <PhotoList photos={photos} toggleFavourite={toggleFavourite} likedPhotos={likedPhotos} toggleModal={toggleModal}/>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default PhotoDetailsModal;

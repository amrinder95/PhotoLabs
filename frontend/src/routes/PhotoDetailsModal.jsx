import React from 'react';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';

import '../styles/PhotoDetailsModal.scss'

const PhotoDetailsModal = ({closeModal, modalPhoto, likedPhotos, toggleFavourite, photos, toggleModal, isModal}) => {
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={closeModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className='photo-details-modal__top-bar'>
        <div>
          <PhotoFavButton toggleFavourite={toggleFavourite} likedPhotos={likedPhotos} id={modalPhoto.id}/>
          <img className="photo-details-modal__image" src={modalPhoto.urls.full} onClick={() => toggleModal(modalPhoto)}></img>
          <div className='photo-details-modal__photographer-details'>
            <img className="photo-details-modal__photographer-profile" src={modalPhoto.user.profile}></img>
            <div className="photo-details-modal__photographer-info">
              <p className="">{modalPhoto.user.name}</p>
              <p className="photo-details-modal__photographer-location">{modalPhoto.location.city}, {modalPhoto.location.country}</p>
            </div>
          </div>
          <div className="photo-details-modal__header">
            <h5>Similar Photos</h5>
              <div className='photo-details-modal__images'>
                <PhotoList isModal={isModal} photos={photos} toggleFavourite={toggleFavourite} likedPhotos={likedPhotos} toggleModal={toggleModal} />
              </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default PhotoDetailsModal;

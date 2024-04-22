import React from 'react';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';

import '../styles/PhotoDetailsModal.scss'

const LikedPhotosModal = ({closeModal, likedPhotos, toggleFavourite, isModal}) => {
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={closeModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className='photo-details-modal__top-bar'>
        <div>
          <div className="photo-details-modal__header">
            <h5>Liked Photos</h5>
              <div className='photo-details-modal__images'>
                <PhotoList photos={likedPhotos} toggleFavourite={toggleFavourite} likedPhotos={likedPhotos} isModal={isModal} />
              </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default LikedPhotosModal;

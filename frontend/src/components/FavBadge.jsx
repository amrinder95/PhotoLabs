import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ likedPhotosLength, toggleLikedPhotos, likedPhotos }) => {
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={!!likedPhotosLength} likedPhotosLength={likedPhotosLength} toggleLikedPhotos={toggleLikedPhotos} likedPhotos={likedPhotos}/>
    </div>
  ) 
};

export default FavBadge;
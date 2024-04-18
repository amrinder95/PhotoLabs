import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ likedPhotos }) => {
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={!!likedPhotos} likedPhotos={likedPhotos}/>
    </div>
  ) 
};

export default FavBadge;
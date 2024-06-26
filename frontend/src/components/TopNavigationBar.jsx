import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigationBar = ({topics, likedPhotos, handleTopicSelect, toggleLikedPhotos}) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo" onClick={() => handleTopicSelect(6)}>PhotoLabs</span>
      <TopicList topics={topics} handleTopicSelect={handleTopicSelect}/>
      <FavBadge likedPhotosLength={likedPhotos.length > 0} toggleLikedPhotos={toggleLikedPhotos} likedPhotos={likedPhotos}/>
    </div>
  )
}

export default TopNavigationBar;
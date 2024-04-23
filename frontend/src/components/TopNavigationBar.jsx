import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigationBar = ({topics, likedPhotos, handleTopicSelect}) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} handleTopicSelect={handleTopicSelect}/>
      <FavBadge likedPhotos={likedPhotos.length > 0}/>
    </div>
  )
}

export default TopNavigationBar;
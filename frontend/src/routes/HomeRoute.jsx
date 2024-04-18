import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
  const [likedPhotos, setLikedPhotos] = useState([]);
  const handleClick = (id) => {
    //add logic to update liked photo state, maybe add/remove to array containing liked photos?
    const likedPhoto = likedPhotos.includes(id);
    likedPhoto ? setLikedPhotos(prevLikedPhotos => prevLikedPhotos.filter(e => e !== id) ): setLikedPhotos(prevLikedPhotos => [...prevLikedPhotos, id]);
  }

  return (
    <div className="home-route">
      <TopNavigationBar topics={props.topics} likedPhotos={likedPhotos}/>
      <PhotoList photos={props.photos} handleClick={handleClick} likedPhotos={likedPhotos}/>
    </div>
  );
};

export default HomeRoute;

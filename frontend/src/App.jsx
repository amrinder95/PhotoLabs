import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';


const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

const arrayOfPhotos = [<PhotoListItem key={sampleDataForPhotoListItem.id} photo={sampleDataForPhotoListItem}/>, <PhotoListItem key={sampleDataForPhotoListItem.id} photo={sampleDataForPhotoListItem}/>, <PhotoListItem key={sampleDataForPhotoListItem.id} photo={sampleDataForPhotoListItem}/>];

// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      {arrayOfPhotos}
    </div>
  );
};

export default App;
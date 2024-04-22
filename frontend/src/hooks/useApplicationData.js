// Our useApplicationData Hook will return an object with four keys representing the following items:

// The state object will contain the entire state of the application.
// The updateToFavPhotoIds action can be used to set the favourite photos.
// The setPhotoSelected action can be used when the user selects a photo.
// The onClosePhotoDetailsModal action can be used to close the modal.
import { useState, useReducer, useEffect } from 'react';

/* insert app levels actions below */
export const ACTIONS = {
  APP_TOGGLE_MODAL: 'APP_TOGGLE_MODAL',
  PHOTO_TOGGLE_FAVOURITE: 'PHOTO_TOGGLE_FAVOURITE',
  APP_SET_PHOTO_DATA: 'APP_SET_PHOTO_DATA',
  APP_SET_TOPIC_DATA: 'APP_SET_TOPIC_DATA',
  APP_SET_TOPIC: 'APP_SET_TOPIC',
  APP_GET_PHOTOS_BY_TOPICS: 'APP_GET_PHOTOS_BY_TOPICS'
};
const initialState = {
  showModal: false,
  modalPhoto: null,
  likedPhotos: [],
  photoData: [],
  topicData: [],
  topic: null
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.APP_TOGGLE_MODAL:
      return {...state, 
        showModal: action.payload !== null, 
        modalPhoto: action.payload 
      };
    case ACTIONS.PHOTO_TOGGLE_FAVOURITE:
      const  id  = action.payload;
      const likedPhoto = state.likedPhotos.includes(id);
      return {
        ...state,
        likedPhotos: likedPhoto ? state.likedPhotos.filter(e => e !== id) : [...state.likedPhotos, id]
      }
    case ACTIONS.APP_SET_PHOTO_DATA:
      return {
        ...state,
        photoData: action.payload
      }
    case ACTIONS.APP_SET_TOPIC_DATA:
      return {
        ...state,
        topicData: action.payload
      }
    case ACTIONS.APP_SET_TOPIC:
      return {
        ...state,
        topic: action.payload
      }
    case ACTIONS.APP_GET_PHOTOS_BY_TOPICS:
      return {
        ...state,
        photoData: action.payload
      }
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}


function useApplicationData() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const toggleModal = (photo) => {
    dispatch({ type: ACTIONS.APP_TOGGLE_MODAL, payload: photo });
  }
  const toggleFavourite = (id) => {
    dispatch({ type: ACTIONS.PHOTO_TOGGLE_FAVOURITE, payload: id })
  }

  const handleTopicSelect = (topicId) => {
    dispatch({ type: ACTIONS.APP_SET_TOPIC, payload: topicId})
  }

  useEffect(()=> {
    fetch('http://localhost:8001/api/photos')
      .then((res) => res.json())
      .then(data => dispatch({type: ACTIONS.APP_SET_PHOTO_DATA, payload: data}))
      .catch((err) => console.log('Error when fetching data: ', err))
  }, [])

  useEffect(()=> {
    fetch('http://localhost:8001/api/topics')
      .then((res) => res.json())
      .then(data => dispatch({type: ACTIONS.APP_SET_TOPIC_DATA, payload: data}))
      .catch((err) => console.log('Error when fetching data: ', err))
  }, [])

  useEffect(()=> {
    if(state.topic !== null){
      fetch(`http://localhost:8001/api/topics/photos/${state.topic}`)
      .then((res) => res.json())
      .then(data => dispatch({type: ACTIONS.APP_GET_PHOTOS_BY_TOPICS, payload: data}))
      .catch((err) => console.log('Error when fetching data: ', err))
    }
  }, [state.topic])

  const { showModal, modalPhoto, likedPhotos, photoData, topicData } = state;

  return {
    showModal,
    modalPhoto,
    likedPhotos,
    toggleModal,
    toggleFavourite,
    handleTopicSelect,
    photoData,
    topicData
  };
};

export default useApplicationData;
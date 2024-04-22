import { useReducer, useEffect } from 'react';

export const ACTIONS = { //Actions for app or components
  APP_TOGGLE_MODAL: 'APP_TOGGLE_MODAL',
  PHOTO_TOGGLE_FAVOURITE: 'PHOTO_TOGGLE_FAVOURITE',
  APP_SET_PHOTO_DATA: 'APP_SET_PHOTO_DATA',
  APP_SET_TOPIC_DATA: 'APP_SET_TOPIC_DATA',
  APP_SET_TOPIC: 'APP_SET_TOPIC'
};
const initialState = { //initial state object
  showModal: false,
  modalPhoto: null,
  likedPhotos: [],
  photoData: [],
  topicData: [],
  topic: null
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.APP_TOGGLE_MODAL: //toggle modal action
      return {...state, 
        showModal: action.payload !== null, 
        modalPhoto: action.payload 
      };
    case ACTIONS.PHOTO_TOGGLE_FAVOURITE: //toggle favourite photo and save to likedphotos action
      const  id  = action.payload;
      const likedPhoto = state.likedPhotos.includes(id);
      return {
        ...state,
        likedPhotos: likedPhoto ? state.likedPhotos.filter(e => e !== id) : [...state.likedPhotos, id]
      }
    case ACTIONS.APP_SET_PHOTO_DATA: //load photos action
      return {
        ...state,
        photoData: action.payload
      }
    case ACTIONS.APP_SET_TOPIC_DATA: //load topics action
      return {
        ...state,
        topicData: action.payload
      }
    case ACTIONS.APP_SET_TOPIC: //set topic when selected action
      return {
        ...state,
        topic: action.payload
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

  useEffect(()=> { //retrieve photos 
    fetch('http://localhost:8001/api/photos')
      .then((res) => res.json())
      .then(data => dispatch({type: ACTIONS.APP_SET_PHOTO_DATA, payload: data}))
      .catch((err) => console.log('Error when fetching data: ', err))
  }, [])

  useEffect(()=> { //retrieve topics
    fetch('http://localhost:8001/api/topics')
      .then((res) => res.json())
      .then(data => dispatch({type: ACTIONS.APP_SET_TOPIC_DATA, payload: data}))
      .catch((err) => console.log('Error when fetching data: ', err))
  }, [])

  useEffect(()=> {
    if(state.topic !== null){ //if topic is selected, retrieve photos for selected topic
      fetch(`http://localhost:8001/api/topics/photos/${state.topic}`)
      .then((res) => res.json())
      .then(data => dispatch({type: ACTIONS.APP_SET_PHOTO_DATA, payload: data}))
      .catch((err) => console.log('Error when fetching data: ', err))
    } else { //if no topic is selected, retrieve all photos
      fetch('http://localhost:8001/api/photos')
      .then((res) => res.json())
      .then(data => dispatch({type: ACTIONS.APP_SET_PHOTO_DATA, payload: data}))
      .catch((err) => console.log('Error when fetching data: ', err))
    }
  }, [state.topic])

  const { showModal, modalPhoto, likedPhotos, photoData, topicData } = state; //export state

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
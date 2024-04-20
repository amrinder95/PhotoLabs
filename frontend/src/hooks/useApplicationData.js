// Our useApplicationData Hook will return an object with four keys representing the following items:

// The state object will contain the entire state of the application.
// The updateToFavPhotoIds action can be used to set the favourite photos.
// The setPhotoSelected action can be used when the user selects a photo.
// The onClosePhotoDetailsModal action can be used to close the modal.
import { useState } from 'react';
import { useReducer } from 'react';

/* insert app levels actions below */
export const ACTIONS = {
  TOGGLE_MODAL: 'TOGGLE_MODAL',
  TOGGLE_FAVOURITE: 'TOGGLE_FAVOURITE'
};
const initialState = {
  showModal: false,
  modalPhoto: null,
  likedPhotos: []
};
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.TOGGLE_MODAL:
      return {...state, showModal: action.payload !== null, modalPhoto: action.payload };
    case ACTIONS.TOGGLE_FAVOURITE:
      const { id } = action.payload;
      const likedPhoto = state.likedPhotos.includes(id);
      return {
        ...state,
        likedPhotos: likedPhoto ? state.likedPhotos.filter(e => e !== id) : [...state.likedPhotos, id]
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
    dispatch({ type: ACTIONS.TOGGLE_MODAL, payload: photo });
  }
  const toggleFavourite = (id) => {
    dispatch({ type: ACTIONS.TOGGLE_FAVOURITE, payload: { id }})
  }
  const isModal = state.showModal;
  const { showModal, modalPhoto, likedPhotos } = state;
  return {
    showModal,
    modalPhoto,
    likedPhotos,
    toggleModal,
    toggleFavourite,
    isModal,
  };
};

export default useApplicationData;
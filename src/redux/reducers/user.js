  import {
    USER_NAME
  } from '../constants/user';
  const initialState = {
    name: '',
  };
  
  export default (state = initialState, action = {}) => {
    switch (action.type) {
      case USER_NAME:
        return {
          ...state,
          name: action.payload
        };
      default:
        return state;
    }
  };
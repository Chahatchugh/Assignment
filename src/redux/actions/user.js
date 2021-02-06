  import {
    USER_NAME,
  } from '../constants/user';


  export const userName = data => async (dispatch: any) => {
      dispatch({
        type: USER_NAME,
        payload: data
      });
  };
  
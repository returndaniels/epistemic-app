import { SET_USER_EMAIL, SIGNIN_SUCCEEDED } from "../actions/user.actions";

const initialState = {
  name: null,
  username: null,
  email: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_EMAIL:
      return {
        ...state,
        email: action.payload.email,
      };

    case SIGNIN_SUCCEEDED:
      return {
        ...state,
        name: action.payload.user.fullname,
        username: action.payload.user.username,
        email: action.payload.user.email,
      };

    default:
      return state;
  }
};

export default userReducer;

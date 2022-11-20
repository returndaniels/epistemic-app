import { validateEmail } from "../../utils/validate";

export const SET_USER_EMAIL = "SET_USER_EMAIL";
export const SIGNIN_SUCCEEDED = "SIGNIN_SUCCEEDED";

export function setUserEmailSucceeded(email) {
  return {
    type: SET_USER_EMAIL,
    payload: {
      email,
    },
  };
}

export function signInSucceeded(user) {
  return {
    type: SIGNIN_SUCCEEDED,
    payload: {
      user,
    },
  };
}

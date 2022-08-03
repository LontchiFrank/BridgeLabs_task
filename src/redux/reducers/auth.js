import { REGISTER_SUCCESS } from "../Types";

const initialState = {
  isAuthenticated: null,
  Loading: false,
  user: null,
};
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        Loading: false,
      };

    default:
      return state;
  }
}

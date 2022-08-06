import { GET_CATEGORIES } from "../Types";

const initialState = {
  categories: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_CATEGORIES:
      console.log(payload);
      return {
        ...state,
        categories: payload,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
}

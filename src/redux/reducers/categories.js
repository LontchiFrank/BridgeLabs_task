import { GET_CATEGORIES } from "../Types";

const initialState = {
  categories: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: payload.category,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
}

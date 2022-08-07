import { CREATE_CATEGORIES, GET_CATEGORIES } from "../Types";

const initialState = {
  categories: null,
  newcategory: [],
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
    case CREATE_CATEGORIES:
      return {
        ...state,
        newcategory: payload,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
}

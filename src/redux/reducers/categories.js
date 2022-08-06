import { GET_CATEGORIES } from "../Types";

const INITIAL_STATE = {
  categories: [],
};

const getUsersRequest = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: payload,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

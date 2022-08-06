import { GET_CATEGORIES } from "../Types";
import axios from "axios";

export const _getCategories = async () => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_URL}/api/category/categories`
    );
    return {
      type: GET_CATEGORIES,
      payload: res.data,
    };
  } catch (err) {
    if (err.response.data) {
      return { errorMessage: err.response.data.msg, code: 400 };
    } else {
      return { errorMessage: err.message, code: 400 };
    }
  }
};

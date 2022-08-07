import { CREATE_CATEGORIES, GET_CATEGORIES } from "../Types";
import axios from "axios";

export const _getCategories = async () => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_URL}/api/category/categories`
    );
    console.log(res.data);
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

export const createCategory = async (data) => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_URL}/api/category/create`,
      data
    );
    return {
      type: CREATE_CATEGORIES,
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

import { CREATE_CATEGORIES, GET_CATEGORIES, UPDATED_CATEGORY } from "../Types";
import axios from "axios";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

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
export const _updateCategory = async (data, id) => {
  try {
    let res = await axios.put(
      `${process.env.REACT_APP_URL}/api/category/update/${id}`,
      data
    );
    console.log(res.data);
    return {
      type: UPDATED_CATEGORY,
      payload: res.data,
    };
  } catch (err) {
    if (err.response.data) {
      return {
        errorMessage: err.response.data.msg,
        code: 400,
      };
    } else {
      return { errorMessage: err.message, code: 400 };
    }
  }
};

export const _deleteCategory = async (id) => {
  try {
    const res = await axios.delete(
      `${process.env.REACT_APP_URL}/api/category/delete/${id}`
    );
    return res.data;
  } catch (err) {
    if (err.response.data) {
      return { errorMessage: err.response.data.msg, code: 400 };
    } else {
      return { errorMessage: err.message, code: 400 };
    }
  }
};

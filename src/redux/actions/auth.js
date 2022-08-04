import { REGISTER_SUCCESS, LOGIN_SUCCESS } from "../Types";
import axios from "axios";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const registerUsers = async (data) => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_URL}/api/user/register`,
      data,
      config
    );
    return {
      type: REGISTER_SUCCESS,
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

export const login = async (data) => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_URL}/api/user/login`,
      data,
      config
    );
    return {
      type: LOGIN_SUCCESS,
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

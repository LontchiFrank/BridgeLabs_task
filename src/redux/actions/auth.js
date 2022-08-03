import { REGISTER_SUCCESS } from "./Types";
import axios from "axios";

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

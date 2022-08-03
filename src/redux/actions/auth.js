import { REGISTER_SUCCESS } from "./Types";
import axios from "axios";

export const registerUsers = (user) => {
  return {
    type: REGISTER_SUCCESS,
    payload: user,
  };
};

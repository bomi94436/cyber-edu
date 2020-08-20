import axios from "axios";
import { USER_SERVER } from "../components/Config";

export const login = (dataToSubmit) =>
  axios.post(`${USER_SERVER}/login`, dataToSubmit);

export const register = (dataToSubmit) =>
  axios.post(`${USER_SERVER}/register`, dataToSubmit);

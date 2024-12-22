import { useEffect } from "react";
import { APIClient, setAuthorization } from "./api_helper";
import * as url from "./url_helper";
import axios from "axios";

const api = new APIClient();

// Gets the logged in user data from local session
export const getLoggedInUser = () => {
  const user = localStorage.getItem("authUser");

  if (user) {
    //setAuthorization("eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZmJlMWE2YTA2Yzg0Y2JjYTRhMDBjMjQ1NjJiZGQyNDJjZjk3YTAyNzEwYjI5MWYyNjJhM2RmMzQyN2U2OWEzMjdkZDgyOTZiN2E3NDJlMmMiLCJpYXQiOjE2NTUyODU3OTAuNDg0ODI1LCJuYmYiOjE2NTUyODU3OTAuNDg0ODMsImV4cCI6MTY4NjgyMTc5MC40MzY1NjQsInN1YiI6IjEiLCJzY29wZXMiOltdfQ.F4aBSchVdWgtvi75G07ijWt8colXHDpqdaRlgPtJeFYN5ybvEUr9hW44BR9Tz_qaAJ2wHacxmel1vOF01HsH5QarTyoVTWjgyZVSyqZPRZcizMDhIDLLVWmb7bfiyovpQbyDol0EOJscYNCd128draf7ITO0qNdbDWu3t_JSa9jY_qe4eJP5bBhO-C8HkpscFvEBLz8vgXrfKVwGzG3e43k57X8LDOO0RH2L9fmLTUoi0DiqGZgXJEMSbqssfOXsdOAiXnmptWsgZ3uCun8pB5He4TtK-QMXnTJsAxccHFUPnl8xdc2ofeC8d-ykWYicy-xP61BiKBCwZelkM1-_WYZ147jvCTrb1oGPDZE7gHhuQ5OB-Uf0eRP9gZlb8bRTrKzk_AMtHdeS-0sP8OaDiZyG7_hfA5jR-QMWikadI-QbwPouddeLhlYtUSQTKDAFKu0A7tFuB-d9e2SH5iiF0uXATxrriy2csmg7ADKbgMLImX4bOdRPlaPYh9I5ik00oehtquQTGB0fyQcpejMHbIbrXepiQ9l_cgC55HYnNeqFpwBT_wmzvRxc0OQ0OSBuPK_9NWJ8vnQ8kv4Ud64eHVhugAZ9SbOEGZtb7fRy6RZczAjUQstAI5DTww41qHYi0T6JPu5zQc5bsEXhKh4Q-xypP8i3X2FRoo0KfFXTKi0")
    return JSON.parse(user);
  }
  return null;
};

if (localStorage.getItem("token")) {
  const users = localStorage.getItem("token");
  setAuthorization(users);
}

// //is user is logged in
export const isUserAuthenticated = () => {
  return getLoggedInUser() !== null;
};

// Register Method
export const postJwtRegister = (url, data) => {
  return api.create(url, data).catch((err) => {
    var message;
    if (err.response && err.response.status) {
      switch (err.response.status) {
        case 404:
          message = "Sorry! the page you are looking for could not be found";
          break;
        case 500:
          message =
            "Sorry! something went wrong, please contact our support team";
          break;
        case 401:
          message = "Invalid credentials";
          break;
        default:
          message = err[1];
          break;
      }
    }
    throw message;
  });
};

// -------------------------- Login Api -------------------------
export const LoginApi = async(requserdata) => await api.create(url.INSERT_LOGIN, requserdata);
export const LogoutApi = async(requserdata) => await api.get(url.LOGOUT, requserdata);

// -------------------------- User Api -------------------------
export const UserlistApi = async(requserdata) => await api.get(url.GET_USER_LIST, requserdata);
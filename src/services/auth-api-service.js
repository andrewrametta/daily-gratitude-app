import config from "../config";
import TokenService from "./token-service";

export default {
  // used to register user
  postUser(user) {
    return fetch(`${config.API_ENDPOINT}/api/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  // used to create new entry in newday 
  postDay(day) {
    const token = "bearer " + TokenService.hasAuthToken();
    return fetch(`${config.API_ENDPOINT}/api/days`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(day),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  // used in dashboard to get all days with aut token matching user in database
  getDay(day) {
    const token = "bearer " + TokenService.hasAuthToken();
    return fetch(`${config.API_ENDPOINT}/api/days`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(day),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  // used to login user by matching user in database
  loginUser(user) {
    return fetch(`${config.API_ENDPOINT}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
};

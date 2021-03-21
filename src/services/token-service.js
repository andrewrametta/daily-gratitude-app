import config from "../config";

export default {
  // create auth token
  saveAuthToken(token) {
    window.localStorage.setItem(config.TOKEN_KEY, token);
  },
  // confirm auth token
  hasAuthToken() {
    return window.localStorage.getItem(config.TOKEN_KEY);
  },
  clearAuthToken() {
    return window.localStorage.removeItem(config.TOKEN_KEY);
  },
};

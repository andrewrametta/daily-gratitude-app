import config from "../config";

export default {
  saveAuthToken(token) {
    window.localStorage.setItem(config.TOKEN_KEY, token);
  },
  hasAuthToken() {
    return window.localStorage.getItem(config.TOKEN_KEY);
  },
  clearAuthToken() {
    return window.localStorage.removeItem(config.TOKEN_KEY);
  },
};

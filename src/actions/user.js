import axios from "axios";
const api_url = process.env.VUE_APP_APIBASE;

export function login(data) {
  return axios
    .post(`${api_url}login`, data)
    .then(res => {
      return res.data;
    })
    .catch(e => {
      this.errors.push(e);
    });
}

export function register(data) {
  return axios
    .post(`${api_url}register`, data)
    .then(res => {
      return res.data.data;
    })
    .catch(e => {
      this.errors.push(e);
    });
}

export function getAllUsers() {
  return axios
    .get(`${api_url}users`)
    .then(res => {
      return res.data;
    })
    .catch(e => {
      this.errors.push(e);
    });
}

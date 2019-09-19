import axios from "axios";
const api_url = process.env.VUE_APP_APIBASE;

export function getAllReports(token) {
  return axios
    .get(`${api_url}reports`, { headers: { "x-access-token": token } })
    .then(res => res.data)
    .catch((e) => {
      this.errors.push(e);
    });
}

export function getReportWeek(week) {
  return axios
    .get(`${api_url}reports/week/${week}`)
    .then(res => res.data.data)
    .catch((e) => {
      this.errors.push(e);
    });
}

export function editReportWeek(data, token) {
  return axios
    .put(`${api_url}reports/`, data, {
      headers: { "x-access-token": token }
    })
    .then(res => res.data)
    .catch((e) => {
      this.errors.push(e);
    });
}

export function createReportWeek(data, token) {
  return axios
    .post(`${api_url}reports/`, data, {
      headers: { "x-access-token": token }
    })
    .then(res => res.data)
    .catch((e) => {
      this.errors.push(e);
    });
}

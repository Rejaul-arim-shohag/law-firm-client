import axios from "axios";

export const privateAxios = axios.create({ baseURL: process.env.REACT_APP_SERVER_URI })
// Add a request interceptor
privateAxios.interceptors.request.use(function (config) {
  // Do something before request is sent
  // if (!config.headers.authorization) {
  //   config.headers.authorization = `Bearer ${localStorage.getItem('accessToken')}`
  // }
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
privateAxios.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});
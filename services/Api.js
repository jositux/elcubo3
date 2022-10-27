import axios from 'axios';

axios.defaults.baseURL = process.env.API_URL;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.headers.get['Content-Type'] = 'application/json';
axios.defaults.headers.get['Accept'] = 'application/json';

const getAccessToken = () => {
  return axios.defaults.headers.common['Authorization'];
};

const resetAccessToken = () => {
  if (axios.defaults.headers.common['Authorization']) {
    delete axios.defaults.headers.common['Authorization'];
  }
};

const setAccessToken = (authToken) => {
  if (authToken) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
  } else {
    throw new Error('Wrong token');
  }
};

const get = (url, params = null) => {
  return axios.get(url, params);
};

const post = (url, data, config) => {
  return axios.post(url, data, config);
};

const put = (url, data, config) => {
  return axios.put(url, data, config);
};

const patch = (url, data, config) => {
  return axios.patch(url, data, config);
};

export default {
  get,
  post,
  put,
  patch,
  setAccessToken,
  getAccessToken,
  resetAccessToken,
};

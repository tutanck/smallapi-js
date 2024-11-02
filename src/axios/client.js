import axios from 'axios';

const axiosInstance = axios.create();

const wrap = (promise) => {
  return promise
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
};

export const get = (url, options) => {
  return wrap(
    axiosInstance({
      method: 'get',
      url,
      ...options,
    }),
  );
};

export const post = (url, options) => {
  return wrap(
    axiosInstance({
      method: 'post',
      url,
      ...options,
    }),
  );
};

export const put = (url, options) => {
  return wrap(
    axiosInstance({
      method: 'put',
      url,
      ...options,
    }),
  );
};

export const del = (url, options) => {
  return wrap(
    axiosInstance({
      method: 'delete',
      url,
      ...options,
    }),
  );
};

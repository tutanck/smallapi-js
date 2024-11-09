import setup from './common/setup';

export const makeGet =
  (axiosInstance, config = {}) =>
  (url, instanceOptions = {}) => {
    return setup(
      axiosInstance({
        ...instanceOptions,
        method: 'get',
        url,
      }),
      config,
    );
  };

export const makePost =
  (axiosInstance, config = {}) =>
  (url, instanceOptions = {}) => {
    return setup(
      axiosInstance({
        ...instanceOptions,
        method: 'post',
        url,
      }),
      config,
    );
  };

export const makePut =
  (axiosInstance, config = {}) =>
  (url, instanceOptions = {}) => {
    return setup(
      axiosInstance({
        ...instanceOptions,
        method: 'put',
        url,
      }),
      config,
    );
  };

export const makeDel =
  (axiosInstance, config = {}) =>
  (url, instanceOptions = {}) => {
    return setup(
      axiosInstance({
        ...instanceOptions,
        method: 'delete',
        url,
      }),
      config,
    );
  };

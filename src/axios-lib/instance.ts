import axios from 'axios';

export const createInstance = (options) => {
  const baseInstance = axios.create({
    ...options,
  });

  return baseInstance;
};

export default axios;

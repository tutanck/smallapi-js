import {
  makeGet,
  makePost,
  makePut,
  makeDel,
  createInstance,
} from '@tutanck/axios';

const baseURL = import.meta.env.VITE_API_BASE_URL;

const apiClient = createInstance({
  baseURL,
});

export const get = makeGet(apiClient, {
  encryption: { decodeKey: import.meta.env.VITE_DECODE_KEY },
});

export const post = makePost(apiClient, {
  encryption: { decodeKey: import.meta.env.VITE_DECODE_KEY },
});

export const put = makePut(apiClient, {
  encryption: { decodeKey: import.meta.env.VITE_DECODE_KEY },
});

export const del = makeDel(apiClient, {
  encryption: { decodeKey: import.meta.env.VITE_DECODE_KEY },
});

export default apiClient;

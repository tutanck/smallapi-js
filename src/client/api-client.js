import {
  makeGet,
  makePost,
  makePut,
  makeDel,
  createInstance,
} from '@tutanck/axios';
import slashes from 'remove-trailing-slash';

function getApiClient({
  serverRootUrl,
  apiBaseUri,
  apiKey,
  decodeKey,
  debug = false,
}) {
  const baseURL = [slashes(serverRootUrl), apiBaseUri].join('');

  if (debug === true)
    console.log({ baseURL, serverRootUrl, apiBaseUri, decodeKey });

  const instance = createInstance({
    baseURL,
    headers: {
      authorization: apiKey,
    },
  });

  const get = makeGet(instance, {
    encryption: { decodeKey },
  });

  const post = makePost(instance, {
    encryption: { decodeKey },
  });

  const put = makePut(instance, {
    encryption: { decodeKey },
  });

  const del = makeDel(instance, {
    encryption: { decodeKey },
  });

  const apiClient = { get, post, put, del };

  return apiClient;
}

export { getApiClient };

export default getApiClient;

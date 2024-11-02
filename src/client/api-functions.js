import getFunction from './functions.js';
import getNaming from './nomenclature.js';

function getApiFunctions(descriptor, { get, post, put, del }) {
  console.log({ descriptor, get, post, put, del });

  const apiFunctions = Object.entries(descriptor).reduce(
    (acc, [key, value]) => {
      console.log({ key, value });

      const fnName = getNaming(key);

      const [description] = value;

      const fn = getFunction(description, { get, post, put, del });

      const cc = {
        [fnName]: fn,
        ...acc,
      };

      return cc;
    },
    {},
  );

  console.log({ apiFunctions });

  /* const { get, post, put, del } = apiHandles;

  console.log({ serverConfig });

  const baseURL = apiBaseUri;

  const apiClient = createInstance({
    baseURL,
  });

  const get = makeGet(apiClient, {
    encryption: { decodeKey },
  });

  const post = makePost(apiClient, {
    encryption: { decodeKey },
  });

  const put = makePut(apiClient, {
    encryption: { decodeKey },
  });

  const del = makeDel(apiClient, {
    encryption: { decodeKey },
  });

  const apiHandles = { get, post, put, del };

  return apiHandles; */
}

export { getApiFunctions };

export default getApiFunctions;

import connect from './connect.js';
import getApiClient from './api-client.js';
import getApiFunctions from './api-functions.js';

async function api(serverUrl, { apiKey = null, debug = false }) {
  const serverConfig = await connect(serverUrl, {
    decodeKey: apiKey,
    debug,
  });

  const { descriptor, serverRootUrl, apiBaseUri, decodeKey } = serverConfig;

  if (debug === true)
    console.log({
      descriptor,
      serverRootUrl,
      apiBaseUri,
      decodeKey,
    });

  const apiClient = getApiClient({
    serverRootUrl,
    apiBaseUri,
    decodeKey,
    debug,
  });

  const { get, post, put, del } = apiClient;

  const apiFunctions = getApiFunctions(
    descriptor,
    { get, post, put, del },
    { debug },
  );

  if (debug === true)
    console.log({
      apiFunctions,
    });

  return apiFunctions;
}

export { api };

export default api;

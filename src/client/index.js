import connect from './connect.js';
import getApiClient from './api-client.js';
import getApiFunctions from './api-functions.js';

async function api(
  serverUrl,
  { apiKey = null, decodeKey = null, debug = false },
) {
  if (debug === true) console.log({ serverUrl, apiKey, decodeKey, debug });

  const serverConfig = await connect(serverUrl, {
    debug,
  });

  const { descriptor, serverRootUrl, apiBaseUri } = serverConfig;

  if (debug === true)
    console.log({
      descriptor,
      serverRootUrl,
      apiBaseUri,
    });

  const apiClient = getApiClient({
    serverRootUrl,
    apiBaseUri,
    decodeKey,
    apiKey,
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

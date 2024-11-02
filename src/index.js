import connect from './client/connect.js';
import getApiClient from './client/api-client.js';
import getApiFunctions from './client/api-functions.js';

async function api(serverUrl, { apiKey = null }) {
  const serverConfig = await connect(serverUrl, {
    decodeKey: apiKey,
  });

  const { descriptor, serverRootUrl, apiBaseUri, decodeKey } = serverConfig;

  console.log({
    serverConfig,
    descriptor,
    serverRootUrl,
    apiBaseUri,
    decodeKey,
  });

  const apiClient = getApiClient({ serverRootUrl, apiBaseUri, decodeKey });

  const { get, post, put, del } = apiClient;

  console.log({
    apiClient,
    get,
    post,
    put,
    del,
  });

  const apiFunctions = getApiFunctions(descriptor, { get, post, put, del });

  console.log({
    apiFunctions,
  });

  return apiFunctions;
}

// Debug
api('http://localhost:9657/', { apiKey: 'my-secret-key' });

export { api };

export default api;

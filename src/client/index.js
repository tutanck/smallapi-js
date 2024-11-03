import connect from './connect.js';
import getApiClient from './api-client.js';
import getApiFunctions from './api-functions.js';

async function api(serverUrl, { apiKey = null }) {
  const serverConfig = await connect(serverUrl, {
    decodeKey: apiKey,
  });

  const { descriptor, serverRootUrl, apiBaseUri, decodeKey } = serverConfig;

  console.log({
    descriptor,
    serverRootUrl,
    apiBaseUri,
    decodeKey,
  });

  const apiClient = getApiClient({ serverRootUrl, apiBaseUri, decodeKey });

  const { get, post, put, del } = apiClient;

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

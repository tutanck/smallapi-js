import connect from './connect';
import getApiClient from './api-client';
import getApiFunctions, { Api } from './api-functions';

export type Config = {
  apiKey: string | null | undefined;
  decodeKey?: string | null | undefined;
  debug?: boolean | undefined;
};

async function api(
  serverUrl: string,
  { apiKey = null, decodeKey = null, debug = false }: Config,
): Promise<Api> {
  if (!serverUrl) {
    throw new Error("'serverUrl' cannot be undefined or null.");
  }

  if (debug === true) console.log({ serverUrl, apiKey, decodeKey, debug });

  const serverConfig = await connect(serverUrl, {
    debug,
  });

  const { descriptor, serverRootUrl, apiBaseUri } = serverConfig;

  const apiClient = getApiClient({
    serverRootUrl,
    apiBaseUri,
    decodeKey,
    apiKey,
  });

  const { get, post, put, del } = apiClient;

  const apiFunctions = getApiFunctions(
    descriptor,
    { get, post, put, del },
    { debug },
  );

  if (debug === true) {
    Object.entries(apiFunctions).map(([fnName, fn]) => {
      console.log(`${fnName}: ${fn.toString()}`);
    });
  }

  return apiFunctions;
}

export { api };

export default api;

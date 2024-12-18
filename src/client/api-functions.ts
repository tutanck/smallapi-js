import getFunction from './functions';
import getNaming from './nomenclature';
import getApiClient from './api-client';

export type Api = { [key: string]: Function };

function getApiFunctions(serverConfig, localConfig): Api {
  const { apiKey = null, decodeKey = null, debug = false } = localConfig;

  if (debug === true) {
    console.log(
      'serverConfig:',
      serverConfig,
      'localConfig:',
      localConfig,
      '\n',
    );
  }

  const { descriptor, serverRootUrl, apiBaseUri } = serverConfig;

  const apiClient = getApiClient({
    serverRootUrl,
    apiBaseUri,
    decodeKey,
    apiKey,
  });

  const { get, post, put, del } = apiClient;

  if (debug === true) {
    console.log('descriptor:', descriptor, '\n');
  }

  const apiFunctions = Object.entries(descriptor).reduce(
    (
      acc,
      [key, value]: [string, Array<{ uri: any; name: any; verb: any }>],
    ) => {
      const fnName = getNaming(key);

      const [description] = value;

      const fn = getFunction(
        description,
        { get, post, put, del },
        { debug, fnName },
      );

      const cc = {
        ...acc,
        [fnName]: fn,
      };

      return cc;
    },
    {},
  );

  return apiFunctions;
}

export { getApiFunctions };

export default getApiFunctions;

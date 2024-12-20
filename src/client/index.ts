import connect from './connect';
import getApiFunctions, { Api } from './api-functions';

export type Config = {
  apiKey?: string | null | undefined;
  decodeKey?: string | null | undefined;
  debug?: boolean | undefined;
};

async function smallapi(
  serverUrl: string,
  localConfig: Config = {
    apiKey: null,
    decodeKey: null,
    debug: false,
  },
): Promise<Api> {
  if (!serverUrl) {
    throw new Error("'serverUrl' cannot be undefined or null.");
  }

  const { apiKey, decodeKey, debug } = localConfig;

  if (debug === true) {
    console.log({ serverUrl, apiKey, decodeKey, debug });
  }

  const serverConfig = await connect(serverUrl, { debug });

  const apiFunctions = getApiFunctions(serverConfig, localConfig);

  if (debug === true) {
    Object.entries(apiFunctions).map(([fnName, fn]) => {
      console.log(`${fnName}: ${fn.toString()}`);
    });
  }

  return apiFunctions;
}

async function test() {
  const api = await smallapi(
    'https://desolate-thicket-04809-1d851952fc60.herokuapp.com/',
    {
      apiKey: 'HDRTmMSq-GKARxduy-PcPywRnT-HANrf2Jn',
    },
  );

  console.log('api:', api, '\n');

  // Empty the users collection
  const user = await api.create();

  console.log('user:', user, '\n');
}
test();

export { smallapi };

export default smallapi;

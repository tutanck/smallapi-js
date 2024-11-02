import _ from 'lodash';
import isArray from 'isarray';
import parseUrl from 'url-parse';
import slashes from 'remove-trailing-slash';
import { API_BASE_URI, CONF_ROUTE_URI } from '../values/constants.js';
import { hasConf } from '../utils/conf.js';
import { get } from '../axios/client.js';

export default async function connect(serverUrl, { decodeKey = null }) {
  console.log('-> fetching', serverUrl);

  return await get(serverUrl)
    .then(async (indexMap) => {
      let descriptor;

      if (hasConf(indexMap)) {
        try {
          const confUrl = `${slashes(serverUrl)}${CONF_ROUTE_URI}`;

          console.log('-> fetching', confUrl);

          const conf = await get(confUrl);

          const { routing } = conf;

          const apiMap = routing[API_BASE_URI];

          if (!(isArray(apiMap) && apiMap.length > 0)) {
            throw new Error('Invalid or empty api-map');
          }

          descriptor = _.groupBy(apiMap, 'name');
        } catch (error) {
          console.error(error);

          throw new Error(`Api conf unreachable on server '${serverUrl}'`);
        }
      } else throw new Error(`Api conf not found on server '${serverUrl}'`);

      const { protocol, host } = parseUrl(serverUrl);

      const serverRootUrl = `${protocol}//${host}`;

      const connection = {
        descriptor,
        serverRootUrl,
        apiBaseUri: API_BASE_URI,
        decodeKey,
      };

      return connection;
    })
    .catch((error) => {
      console.error(error);

      throw new Error(`Unable to connect to server '${serverUrl}'`);
    });
}

import _ from 'lodash';
import isArray from 'isarray';
import parseUrl from 'url-parse';
import slashes from 'remove-trailing-slash';
import { API_BASE_URI, CONF_ROUTE_URI } from '../values/constants.js';
import { hasConf } from '../utils/conf.js';
import { get } from '../axios/client.js';

export default function connect(serverUrl, { decodeKey = null }) {
  console.log('-> fetching', serverUrl);

  get(serverUrl)
    .then(async (indexMap) => {
      let descriptor;

      if (hasConf(indexMap)) {
        try {
          const confUrl = `${slashes(serverUrl)}${CONF_ROUTE_URI}`;

          console.log('-> fetching', confUrl);

          const conf = await get(confUrl);

          console.log({ conf });

          const { routing } = conf;

          console.log({ routing });

          const apiMap = routing[API_BASE_URI];

          console.log({ apiMap });

          if (!(isArray(apiMap) && apiMap.length > 0)) {
            throw new Error('Invalid or empty api-map');
          }

          descriptor = _.groupBy(apiMap, 'name');

          console.log({ descriptor });
        } catch (error) {
          console.error(error);
          console.log(`Api conf unreachable on server "${serverUrl}"`);
          throw new Error(`Api conf unreachable on server "${serverUrl}"`);
        }
      } else {
        console.log(`Api conf not found on server "${serverUrl}"`);

        throw new Error(`Api conf not found on server "${serverUrl}"`);
      }

      const { protocol, host } = parseUrl(serverUrl);

      const serverRootUrl = `${protocol}//${host}`;

      const options = { apiBaseUri: API_BASE_URI, decodeKey };

      console.log({ descriptor, serverRootUrl, options });
    })
    .catch((error) => {
      console.error(error);

      throw new Error(`Unable to connect to server "${serverUrl}"`);
    });
}

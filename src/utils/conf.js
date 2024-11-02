import { CONF_ROUTE_METHOD, CONF_ROUTE_URI } from '../values/constants.js';

export function hasConf(indexMap = []) {
  const confRoute = indexMap.find((route) => route?.path === CONF_ROUTE_URI);

  const isConfCallable = Boolean(
    confRoute?.methods?.includes(CONF_ROUTE_METHOD),
  );

  return isConfCallable;
}

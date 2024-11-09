import getFunction from './functions';
import getNaming from './nomenclature';

export type Api = { [key: string]: Function };

function getApiFunctions(
  descriptor,
  { get, post, put, del },
  { debug = false },
): Api {
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

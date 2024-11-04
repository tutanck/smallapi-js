import getFunction from './functions.js';
import getNaming from './nomenclature.js';

function getApiFunctions(
  descriptor,
  { get, post, put, del },
  { debug = false },
) {
  const apiFunctions = Object.entries(descriptor).reduce(
    (acc, [key, value]) => {
      if (debug === true) console.log({ key, value });

      const fnName = getNaming(key);

      const [description] = value;

      const fn = getFunction(
        description,
        { get, post, put, del },
        { debug, fnName },
      );

      const cc = {
        [fnName]: fn,
        ...acc,
      };

      return cc;
    },
    {},
  );

  return apiFunctions;
}

export { getApiFunctions };

export default getApiFunctions;

import qs from 'qs';

function getFunction(
  { uri, name, verb },
  { get, post, put, del },
  { debug = false },
) {
  const call = {
    PUT: put,
    GET: get,
    POST: post,
    DELETE: del,
  }[verb];

  const Routine = 'Routine';
  if (name.endsWith(Routine)) {
    const count = 'count';
    if (name.startsWith(count)) {
      const fn = async (filter) => {
        const url = `${uri}?${qs.stringify({ filter })}`;

        if (debug === true) console.log(`${verb} '${url}'`);

        call(url);
      };

      return fn;
    }

    const create = 'create';
    if (name.startsWith(create)) {
      const fn = async (docs, options = {}) => {
        const url = `${uri}?${qs.stringify({ options })}`;

        const data = { data: { docs } };

        if (debug === true)
          console.log(`${verb} '${url}' with data: ${JSON.stringify(data)}`);

        call(url, data);
      };

      return fn;
    }

    const findById = 'findById';
    if (name.startsWith(findById)) {
      const fn = async (id, projection = {}, options = {}) => {
        const url = `${uri}${id}?${qs.stringify({ projection, options })}`;

        if (debug === true) console.log(`${verb} '${url}'`);

        call(url);
      };

      return fn;
    }

    const findByQuery = 'findByQuery';
    if (name.startsWith(findByQuery)) {
      const fn = async (filter, projection = {}, options = {}) => {
        const url = `${uri}?${qs.stringify({ filter, projection, options })}`;

        if (debug === true) console.log(`${verb} '${url}'`);

        call(url);
      };

      return fn;
    }

    const removeById = 'removeById';
    if (name.startsWith(removeById)) {
      const fn = async (id, options = {}) => {
        const url = `${uri}${id}?${qs.stringify({ options })}`;

        if (debug === true) console.log(`${verb} '${url}'`);

        call(url);
      };

      return fn;
    }

    const removeByQuery = 'removeByQuery';
    if (name.startsWith(removeByQuery)) {
      const fn = async (filter, options = {}) => {
        const url = `${uri}?${qs.stringify({ filter, options })}`;

        if (debug === true) console.log(`${verb} '${url}'`);

        call(url);
      };

      return fn;
    }

    const updateById = 'updateById';
    if (name.startsWith(updateById)) {
      const fn = async (id, update, options = {}) => {
        const url = `${uri}${id}?${qs.stringify({ options })}`;

        const data = { data: { update } };

        if (debug === true)
          console.log(`${verb} '${url}' with data: ${JSON.stringify(data)}`);

        call(url, data);
      };

      return fn;
    }

    const updateByQuery = 'updateByQuery';
    if (name.startsWith(updateByQuery)) {
      const fn = async (filter, update, options = {}) => {
        const url = `${uri}?${qs.stringify({ filter, options })}`;

        const data = { data: { update } };

        if (debug === true)
          console.log(`${verb} '${url}' with data: ${JSON.stringify(data)}`);

        call(url, data);
      };

      return fn;
    }
  }

  const defaultFn = async ({ body, query, params }) => {
    // TODO remove :params from the uri first to get a raw uri

    const url = `${uri}?${qs.stringify({ query })}`;

    const data = { data: body, params };

    if (debug === true)
      console.log(`${verb} '${url}' with data: ${JSON.stringify(data)}`);

    call(url, data);
  };

  return defaultFn;
}

export { getFunction };

export default getFunction;

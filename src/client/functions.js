import qs from 'qs';

function getFunction({ uri, name, verb }, { get, post, put, del }) {
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

        console.log({ url });

        call(url);
      };

      return fn;
    }

    const create = 'create';
    if (name.startsWith(create)) {
      const fn = async (docs, options = {}) => {
        const url = `${uri}?${qs.stringify({ options })}`;

        console.log({ url });

        call(url, { data: { docs } });
      };

      return fn;
    }

    const findById = 'findById';
    if (name.startsWith(findById)) {
      const fn = async (id, projection = {}, options = {}) => {
        const url = `${uri}${id}?${qs.stringify({ projection, options })}`;

        console.log({ url });

        call(url);
      };

      return fn;
    }

    const findByQuery = 'findByQuery';
    if (name.startsWith(findByQuery)) {
      const fn = async (filter, projection = {}, options = {}) => {
        const url = `${uri}?${qs.stringify({ filter, projection, options })}`;

        console.log({ url });

        call(url);
      };

      return fn;
    }

    const removeById = 'removeById';
    if (name.startsWith(removeById)) {
      const fn = async (id, options = {}) => {
        const url = `${uri}${id}?${qs.stringify({ options })}`;

        console.log({ url });

        call(url);
      };

      return fn;
    }

    const removeByQuery = 'removeByQuery';
    if (name.startsWith(removeByQuery)) {
      const fn = async (filter, options = {}) => {
        const url = `${uri}?${qs.stringify({ filter, options })}`;

        console.log({ url });

        call(url);
      };

      return fn;
    }

    const updateById = 'updateById';
    if (name.startsWith(updateById)) {
      const fn = async (id, update, options = {}) => {
        const url = `${uri}${id}?${qs.stringify({ options })}`;

        console.log({ url });

        call(url, { data: { update } });
      };

      return fn;
    }

    const updateByQuery = 'updateByQuery';
    if (name.startsWith(updateByQuery)) {
      const fn = async (filter, update, options = {}) => {
        const url = `${uri}?${qs.stringify({ filter, options })}`;

        console.log({ url });

        call(url, { data: { update } });
      };

      return fn;
    }
  }

  const defaultFn = async ({ body, query, params }) => {
    // TODO remove :params from the uri first to get a raw uri

    const url = `${uri}?${qs.stringify({ query })}`;

    console.log({ url });

    call(url, { data: body, params });
  };

  return defaultFn;
}

export { getFunction };

export default getFunction;

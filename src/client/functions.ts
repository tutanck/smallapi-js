import qs from 'qs';

/* 
Types 
*/

// count
export type count = (filter: object) => Promise<number>;

// create
export type create = (
  docs: object | Array<object>,
  options: object | undefined,
) => Promise<object | Array<object>>;

// findById
export type findById = (
  id: string,
  projection: object | string | Array<string> | undefined,
  options: object | undefined,
) => Promise<object>;

// findByQuery
export type findByQuery = (
  filter: object,
  projection: object | string | Array<string> | undefined,
  options: object | undefined,
) => Promise<Array<object>>;

// removeById
export type removeById = (
  id: string,
  options: object | undefined,
) => Promise<object>;

// removeByQuery
export type removeByQuery = (
  filter: object,
  options: object | undefined,
) => Promise<any | object>;

// updateById
export type updateById = (
  id: string,
  update: object,
  options: object | undefined,
) => Promise<object>;

// updateByQuery
export type updateByQuery = (
  filter: object,
  update: object,
  options: object | undefined,
) => Promise<any | object>;

// defaultFn
export type defaultFn = ({
  body,
  query,
  params,
}: {
  body: any;
  query: any;
  params: any;
}) => Promise<any>;

/* 
Functions
*/

function getFunction(
  { uri, name, verb },
  { get, post, put, del },
  { debug = false, fnName },
) {
  const call = {
    PUT: put,
    GET: get,
    POST: post,
    DELETE: del,
  }[verb];

  const Routine = 'Routine';
  if (name.endsWith(Routine)) {
    //

    // count
    const count = 'count';
    if (name.startsWith(count)) {
      const countFn: count = async (filter: object): Promise<number> => {
        const url = `${uri}?${qs.stringify({ filter })}`;

        if (debug === true) {
          console.log({ fnName, uri, name, verb });
          console.log(`${verb} '${url}'`);
        }

        return call(url);
      };

      return countFn;
    }

    // create
    const create = 'create';
    if (name.startsWith(create)) {
      const createFn: create = async (
        docs: object | Array<object>,
        options: object | undefined = {},
      ): Promise<object | Array<object>> => {
        const url = `${uri}?${qs.stringify({ options })}`;

        const data = { data: { docs } };

        if (debug === true) {
          console.log({ fnName, uri, name, verb });
          console.log(`${verb} '${url}' with data: ${JSON.stringify(data)}`);
        }

        return call(url, data);
      };

      return createFn;
    }

    // findById
    const findById = 'findById';
    if (name.startsWith(findById)) {
      const findByIdFn: findById = async (
        id: string,
        projection: object | string | Array<string> | undefined = {},
        options: object | undefined = {},
      ): Promise<object> => {
        const url = `${uri.replace(':id', id)}?${qs.stringify({
          projection,
          options,
        })}`;

        if (debug === true) {
          console.log({ fnName, uri, name, verb });
          console.log(`${verb} '${url}'`);
        }

        return call(url);
      };

      return findByIdFn;
    }

    // findByQuery
    const findByQuery = 'findByQuery';
    if (name.startsWith(findByQuery)) {
      const findByQueryFn: findByQuery = async (
        filter: object,
        projection: object | string | Array<string> | undefined = {},
        options: object | undefined = {},
      ): Promise<Array<object>> => {
        const url = `${uri}?${qs.stringify({ filter, projection, options })}`;

        if (debug === true) {
          console.log({ fnName, uri, name, verb });
          console.log(`${verb} '${url}'`);
        }

        return call(url);
      };

      return findByQueryFn;
    }

    // removeById
    const removeById = 'removeById';
    if (name.startsWith(removeById)) {
      const removeByIdFn: removeById = async (
        id: string,
        options: object | undefined = {},
      ): Promise<object> => {
        const url = `${uri.replace(':id', id)}?${qs.stringify({ options })}`;

        if (debug === true) {
          console.log({ fnName, uri, name, verb });
          console.log(`${verb} '${url}'`);
        }

        return call(url);
      };

      return removeByIdFn;
    }

    // removeByQuery
    const removeByQuery = 'removeByQuery';
    if (name.startsWith(removeByQuery)) {
      const removeByQueryFn: removeByQuery = async (
        filter: object,
        options: object | undefined = {},
      ): Promise<any | object> => {
        const url = `${uri}?${qs.stringify({ filter, options })}`;

        if (debug === true) {
          console.log({ fnName, uri, name, verb });
          console.log(`${verb} '${url}'`);
        }

        return call(url);
      };

      return removeByQueryFn;
    }

    // updateById
    const updateById = 'updateById';
    if (name.startsWith(updateById)) {
      const updateByIdFn: updateById = async (
        id: string,
        update: object,
        options: object | undefined = {},
      ): Promise<object> => {
        const url = `${uri.replace(':id', id)}?${qs.stringify({ options })}`;

        const data = { data: { update } };

        if (debug === true) {
          console.log({ fnName, uri, name, verb });
          console.log(`${verb} '${url}' with data: ${JSON.stringify(data)}`);
        }

        return call(url, data);
      };

      return updateByIdFn;
    }

    // updateByQuery
    const updateByQuery = 'updateByQuery';
    if (name.startsWith(updateByQuery)) {
      const updateByQueryFn: updateByQuery = async (
        filter: object,
        update: object,
        options: object | undefined = {},
      ): Promise<any | object> => {
        const url = `${uri}?${qs.stringify({ filter, options })}`;

        const data = { data: { update } };

        if (debug === true) {
          console.log({ fnName, uri, name, verb });
          console.log(`${verb} '${url}' with data: ${JSON.stringify(data)}`);
        }

        return call(url, data);
      };

      return updateByQueryFn;
    }
  }

  // defaultFn
  const defaultFn: defaultFn = async ({
    body,
    query,
    params,
  }: {
    body: any;
    query: any;
    params: any;
  }): Promise<any> => {
    const url = `${uri.replace(':params', '')}?${qs.stringify({ query })}`;

    const data = { data: body, params };

    if (debug === true) {
      console.log({ fnName, uri, name, verb });
      console.log(`${verb} '${url}' with data: ${JSON.stringify(data)}`);
    }

    return call(url, data);
  };

  return defaultFn;
}

export { getFunction };

export default getFunction;

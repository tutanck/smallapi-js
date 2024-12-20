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

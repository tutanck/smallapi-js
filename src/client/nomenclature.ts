function getNaming(rawName) {
  const Routine = 'Routine';
  if (rawName.endsWith(Routine)) {
    const radixLength = rawName.length - Routine.length;

    const radix = rawName.substring(0, radixLength);

    const count = 'count';
    if (rawName.startsWith(count)) {
      const modelName = radix.substring(count.length, rawName.length);

      const fnName = `count${modelName}Documents`;
      return fnName;
    }

    const create = 'create';
    if (rawName.startsWith(create)) {
      const modelName = radix.substring(create.length, rawName.length);

      const fnName = `create${modelName}`;
      return fnName;
    }

    const findById = 'findById';
    if (rawName.startsWith(findById)) {
      const modelName = radix.substring(findById.length, rawName.length);

      const fnName = `find${modelName}ById`;
      return fnName;
    }

    const findByQuery = 'findByQuery';
    if (rawName.startsWith(findByQuery)) {
      const modelName = radix.substring(findByQuery.length, rawName.length);

      const fnName = `find${modelName}ByQuery`;
      return fnName;
    }

    const removeById = 'removeById';
    if (rawName.startsWith(removeById)) {
      const modelName = radix.substring(removeById.length, rawName.length);

      const fnName = `remove${modelName}ByQuery`;
      return fnName;
    }

    const removeByQuery = 'removeByQuery';
    if (rawName.startsWith(removeByQuery)) {
      const modelName = radix.substring(removeByQuery.length, rawName.length);

      const fnName = `remove${modelName}ByQuery`;
      return fnName;
    }

    const updateById = 'updateById';
    if (rawName.startsWith(updateById)) {
      const modelName = radix.substring(updateById.length, rawName.length);

      const fnName = `update${modelName}ById`;
      return fnName;
    }

    const updateByQuery = 'updateByQuery';
    if (rawName.startsWith(updateByQuery)) {
      const modelName = radix.substring(updateByQuery.length, rawName.length);

      const fnName = `update${modelName}ByQuery`;
      return fnName;
    }
  }

  return rawName;
}

export { getNaming };

export default getNaming;

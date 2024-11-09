const safe = (el, repl) => el || repl;

const usafe = (el, repl) => {
  if ([undefined, null, 'undefined', 'null'].includes(el)) return repl;
  return el;
};

export { safe, usafe };

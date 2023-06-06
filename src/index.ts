function nWrap<Tin, Tout>(input: Tin, fn: (i: Tin) => Tout) {
  const res = fn(input);
  return {
    result: res,
    to: function <Toutput>(fn: (i: Tout) => Toutput) {
      return nWrap(res, fn);
    },
  };
}

export function pipe<TInitial>(initial: TInitial) {
  return {
    to: function <Toutput>(fn: (i: TInitial) => Toutput) {
      return nWrap<TInitial, Toutput>(initial, fn);
    },
  };
}

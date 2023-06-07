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

export function mapObject<T>(
  array: string[],
  callbackfn: (value: string, index: number, array: string[]) => [string, T]
) {
  return Object.fromEntries(array.map(callbackfn));
}

export function orDefault<T>(input: T | undefined, defaultValue: T): T {
  return !!input ? input : defaultValue;
}

export function orDefaultArray(input: any[] | undefined) {
  return orDefault(input, []);
}

export function orDefaultString(input: string | undefined) {
  return orDefault(input, "");
}

export function tryParseJSON(input: string | undefined) {
  return input ? JSON.parse(input) : undefined;
}

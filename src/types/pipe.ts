type PipeValue<T> = {
  returnValue: T;
  to: <T2>(inputFn: (i: T) => T2) => PipeValue<T2>;
};

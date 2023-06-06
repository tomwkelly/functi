import { pipe } from "../index";

const sum = (a: number, b: number) => a + b;
const times2 = (a: number) => a * 2;
const toString = (a: number) => a.toString();

test("Pipe function", () => {
  const o = pipe(sum(1, 1)).to(times2).to(toString).result;
  expect(o).toBe("4");
});

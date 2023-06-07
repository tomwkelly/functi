import { mapObject, orDefault, pipe } from "../index";

test("Pipe function", () => {
  const sum = (a: number, b: number) => a + b;
  const times2 = (a: number) => a * 2;
  const toString = (a: number) => a.toString();

  const o = pipe(sum(1, 1)).to(times2).to(toString).result;
  expect(o).toBe("4");
});

test("mapObject function", () => {
  const a = ["a", "b", "c"];
  const o: { [key: string]: string } = { a: "x", b: "y", c: "z", d: "none" };
  const x = mapObject(a, (i) => [i, o[i]]);
  expect(x).toStrictEqual({ a: "x", b: "y", c: "z" });
});

test("orDefault function returns default", () => {
  const a: string | undefined = undefined;
  expect(orDefault<string>(a, "test")).toBe("test");
});

test("orDefault function returns input", () => {
  const a: string | undefined = "x";
  expect(orDefault<string>(a, "test")).toBe("x");
});

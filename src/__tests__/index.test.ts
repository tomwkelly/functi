import {
  mapObject,
  orDefault,
  orDefaultArray,
  orDefaultString,
  pipe,
  tryParseJSON,
} from "../index";

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
test("orDefaultString function returns default", () => {
  const a: string | undefined = undefined;
  expect(orDefaultString(a)).toBe("");
});

test("orDefaultString function returns input", () => {
  const a: string | undefined = "x";
  expect(orDefaultString(a)).toBe("x");
});
test("orDefaultArray function returns default", () => {
  const a: [] | undefined = undefined;
  expect(orDefaultArray(a)).toStrictEqual([]);
});

test("orDefaultArray function returns input", () => {
  const a: string[] | undefined = ["x"];
  expect(orDefaultArray(a)).toStrictEqual(["x"]);
});

test("tryParseJSON function returns parsed object", () => {
  const a = { a: "a", b: "b" };
  const b: string | undefined = JSON.stringify(a);
  expect(tryParseJSON(b)).toStrictEqual(a);
});

test("tryParseJSON function returns undefined", () => {
  const b: string | undefined = undefined;
  expect(tryParseJSON(b)).toBe(undefined);
});

import { hello } from "../index";

test("Hello", () => {
  expect(hello()).toBe("test");
});

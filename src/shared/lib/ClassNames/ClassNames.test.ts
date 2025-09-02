import { describe, expect, test } from "vitest";

import { ClassNames } from "./ClassNames";

describe("ClassNames", () => {
  test("1 argument", () => {
    expect(ClassNames("Class1")).toBe("Class1");
  });

  test("conditional class", () => {
    expect(ClassNames("class1", { class2: true })).toBe("class1 class2");
    expect(ClassNames("class1", { class2: false })).toBe("class1");
  });

  test("conditional class", () => {
    expect(ClassNames("class1", undefined, null, "", "class2")).toBe(
      "class1 class2"
    );
  });
});

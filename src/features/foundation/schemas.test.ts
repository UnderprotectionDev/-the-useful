import { describe, expect, test } from "bun:test";

import { statusInput, statusSearch } from "./schemas";

describe("foundation schemas", () => {
  test("validates URL search and falls back to summary", () => {
    expect(statusSearch.parse({})).toEqual({ view: "summary" });
    expect(statusSearch.parse({ view: "details" })).toEqual({
      view: "details",
    });
    expect(statusSearch.parse({ view: ["invalid"] })).toEqual({
      view: "summary",
    });
  });

  test("RPC input rejects invalid views rather than silently defaulting", () => {
    expect(statusInput.safeParse({ view: "invalid" }).success).toBe(false);
    expect(statusInput.safeParse({}).success).toBe(false);
  });
});

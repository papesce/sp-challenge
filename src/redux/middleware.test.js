import { isAuth } from "./middleware";

describe("middleware", () => {
  it("isAuth should return false if no user is present", () => {
    expect(isAuth({})).toBe(false);
  });
});

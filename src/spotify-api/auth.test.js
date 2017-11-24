import { decodeHash, publicurl } from "./auth";

describe("auth tests", () => {
  it("should decode the token from hash", () => {
    const token = "BQD290TUNHTYWe5-B2qlGXYio";
    const expires = "3600";
    const locationHash =
      "#access_token=BQD290TUNHTYWe5-B2qlGXYio&token_type=Bearer&expires_in=3600";
    const hash = decodeHash(locationHash);
    expect(hash.access_token).toEqual(token);
    expect(hash.expires_in).toEqual(expires);
  });

  it("should set clientID", () => {
    process.env.NODE_ENV = "production";
    debugger;
    //console.log(publicurl);
  });
});

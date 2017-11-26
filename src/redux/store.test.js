import { storeFactory, getStateFromCache } from "./store";
import { loginSuccess, loginFailure } from "./actions";
import { searchClear } from "./actions";
import { SEARCH_STARTED, SEARCH_SUCCEEDED, SEARCH_FAILED } from "./actionTypes";
import {
  RECOMMENDATIONS_STARTED,
  RECOMMENDATIONS_SUCCEEDED,
  RECOMMENDATIONS_FAILED
} from "./actionTypes";

describe("Store Factory", () => {
  let store;

  describe("Store user info", () => {
    it("should keep and empty user state", () => {
      let userInfo = {};
      store = storeFactory({ user: userInfo });
      let state = store.getState();
      expect(state.user).toBeDefined();
      expect(state.user).toBe(userInfo);
    });

    it("should keep the user state", () => {
      let userInfo = { auth_token: "FGH" };
      store = storeFactory({ user: userInfo });
      let state = store.getState();
      expect(state.user).toBeDefined();
      expect(state.user).toBe(userInfo);
    });

    it("should dispatch loginSuccess action", () => {
      let userInfo = {};
      store = storeFactory({ user: userInfo });
      store.dispatch(loginSuccess("token", "rtoken", "1234"));
      let state = store.getState();
      expect(state.user).toBeDefined();
      expect(state.user).toEqual({
        auth_token: "token",
        refresh_token: "rtoken",
        expiration: "1234"
      });
    });

    it("should dispatch loginFailure action", () => {
      let userInfo = {};
      store = storeFactory({ user: userInfo });
      store.dispatch(loginFailure("error message"));
      let state = store.getState();
      expect(state.user).toBeDefined();
      expect(state.user).toEqual({ error: "error message" });
    });
  });

  describe("Store search results", () => {
    it("should clear the results", () => {
      const searchResult = { search: { albums: { name: 1 } } };
      store = storeFactory({ search: searchResult });
      store.dispatch(searchClear());
      const state = store.getState();
      expect(state.search.albums).toEqual({});
      expect(state.recommendations).toEqual({});
    });

    it("should start search", () => {
      const payload = ["text"];
      const searchResult = { search: { albums: { name: 1 } } };
      store = storeFactory({ search: searchResult });
      store.dispatch({ type: SEARCH_STARTED, payload: payload });
      const state = store.getState();
      expect(state.search.albums.loading).toBe(true);
      expect(state.search.albums.searchText).toBe("text");
    });
    it("should populate albums when success search", () => {
      const searchResult = { albums: { name: "alb_name" } };
      const searchAction = { type: SEARCH_SUCCEEDED, payload: searchResult };
      const prevState = { search: { albums: { searchText: "text" } } };
      const nextState = {
        search: { albums: { searchText: "text", result: searchResult.albums } }
      };
      store = storeFactory(prevState);
      store.dispatch(searchAction);
      const state = store.getState();
      expect(state.search).toEqual(nextState.search);
    });
    it("should return error when search fails", () => {
      const searchResult = { response: JSON.stringify({ error: "error" }) };
      store = storeFactory({});
      store.dispatch({ type: SEARCH_FAILED, payload: searchResult });
      const state = store.getState();
      expect(state.search.albums.error).toEqual("error");
    });
  });
  describe("retrieve state from local storage", () => {
    it("should use state from localStorage", () => {
      global.localStorage["redux-store"] = JSON.stringify({ search: "123" });
      const state = getStateFromCache();
      expect(state.search).toBe("123");
    });
    describe("store recommendation results", () => {
      it("should start recommendations search ", () => {
        const payload = [{ album: { name: "name" } }];
        store = storeFactory({});
        store.dispatch({ type: RECOMMENDATIONS_STARTED, payload: payload });
        const state = store.getState();
        expect(state.recommendations.loading).toBe(true);
        expect(state.recommendations.album.name).toBe("name");
      });
      it("should populate recommendations when success", () => {
        const searchResult = { tracks: [] };
        const searchAction = {
          type: RECOMMENDATIONS_SUCCEEDED,
          payload: searchResult
        };
        const prevState = { recommendations: { album: { name: "name" } } };
        const nextState = {
          recommendations: { album: { name: "name" }, results: searchResult }
        };
        store = storeFactory(prevState);
        store.dispatch(searchAction);
        const state = store.getState();
        expect(state.recommendations).toEqual(nextState.recommendations);
      });
      it("should return error when recommendations api fails", () => {
        const searchResult = { response: JSON.stringify({ error: "error" }) };
        store = storeFactory({});
        store.dispatch({ type: RECOMMENDATIONS_FAILED, payload: searchResult });
        const state = store.getState();
        expect(state.recommendations.results.error).toEqual("error");
      });
    });
  });
});

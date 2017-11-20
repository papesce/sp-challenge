import {storeFactory} from './store'
import { loginSuccess, loginFailure}  from './actions'
import {  searchClear } from './actions'
import {SEARCH_STARTED, SEARCH_SUCCEEDED, SEARCH_FAILED} from './actionTypes'

describe("Store Factory", () => { 

    let store;

    describe("Store user info", () => {

        it("should Keep the user state", () => {
            let userInfo = {};
            store = storeFactory({user: userInfo});
            let state = store.getState()
            expect(state.user).toBeDefined();
            expect(state.user).toBe(userInfo);
        }) 

        it("should dispatch loginSuccess action", () => {
            let userInfo = {};
            store = storeFactory({user: userInfo});
            store.dispatch(loginSuccess("token"));
            let state = store.getState()
            expect(state.user).toBeDefined();
            expect(state.user).toEqual({auth_token: "token"});
        }) 

        it("should dispatch loginFailure action", () => {
            let userInfo = {};
            store = storeFactory({user: userInfo});
            store.dispatch(loginFailure("error message"));
            let state = store.getState()
            expect(state.user).toBeDefined();
            expect(state.user).toEqual({error: "error message"});
        }) 
    })

    describe("Store search results",  () => {

        it("should clear the results", () => {
            const searchResult = {search: {albums:{name:1}}};
            store = storeFactory({search: searchResult}) 
            store.dispatch(searchClear())
            const state = store.getState()
            expect(state.search.albums).toEqual({})
        })

        it("should start search", () => {
            const searchResult = {search: {albums:{name:1}}};
            store = storeFactory({search: searchResult}) 
            store.dispatch({type: SEARCH_STARTED, payload:{}})
            const state = store.getState()
            expect(state.search.albums.loading).toBe(true)
        })
        it("should populate albums when success search", () => {
            const searchResult = {albums:{name:1}};
            store = storeFactory({}) 
            store.dispatch({type: SEARCH_SUCCEEDED, payload:searchResult})
            const state = store.getState()
            expect(state.search).toEqual(searchResult)
        })
        it("should return error when search fails", () => {
            const searchResult = {response: JSON.stringify({error: "error"})};
            console.log(searchResult);
            store = storeFactory({}) 
            store.dispatch({type: SEARCH_FAILED, payload: searchResult})
            const state = store.getState()
            expect(state.search.albums.error).toEqual("error")
        })
    })

})
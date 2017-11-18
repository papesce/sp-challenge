import {storeFactory} from './store'
import { loginSuccess, loginFailure}  from './actions'

describe("Store Factory", () => { 

    let store;

    it("should Keep the user state", () => {
        let user = {};
        store = storeFactory({user});
        let state = store.getState()
        expect(state.user).toBeDefined();
        expect(state.user).toBe(user);
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
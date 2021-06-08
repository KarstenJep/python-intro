import userReducer from './user.reducer';

describe('Testing userReducer...', () => {
    
    test('initial state should be an empty object...', () => {
        let action = {};
        let state = undefined;
        let returnedState = userReducer(state, action);
        expect( returnedState ).toEqual( {} );
    })

    test('Test clear user (used on logout)...', () => {
        let action = {type: 'UNSET_USER'};
        let state = {username: 'jdoe', id: 0};
        let returnedState = userReducer(state, action);
        expect( returnedState ).toEqual( {} );
    })

    test('Test to set user (used on login)...', () => {
        let action = {type: 'SET_USER', payload: {username: 'jdoe', id: 0}};
        let state = {};
        let returnedState = userReducer(state, action);
        expect( returnedState ).toEqual( {username: 'jdoe', id: 0} );
    })
})
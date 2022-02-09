const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const initialState = {
    logged_in: false
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            return {logged_in: true}
        case LOGOUT:
            return {logged_in: false}
        default:
            return state;
    }
};
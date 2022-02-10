const SET_TOKEN = 'SET_TOKEN';

const initialState = {
    CLIENT_ID: '72e354833a894594b5a19ac37fbf3f06',
    REDIRECT_URI: 'http://localhost:3000',
    token: null,
    logged_in: false,
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case SET_TOKEN:
            return {...state, token: action.token};
        default:
            return state;
    }
};
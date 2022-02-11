const SET_TOKEN = 'SET_TOKEN';
const ADD_ARTISTS = 'ADD_ARTISTS';

const initialState = {
    CLIENT_ID: '72e354833a894594b5a19ac37fbf3f06',
    REDIRECT_URI: 'http://localhost:3000/login',
    token: window.localStorage.getItem('token') ? window.localStorage.getItem('token') : null,
    BASE_URL: 'https://api.spotify.com',
    //user data
    artists_ids: []
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_ARTISTS:
            return {...state, artists_ids: [...state.artists_ids, ...action.artists]}
        case SET_TOKEN:
            return {...state, token: action.token};
        default:
            return state;
    }
};
const SET_TOKEN = 'SET_TOKEN';
const ADD_ARTISTS = 'ADD_ARTISTS';
const SET_ARTISTS = 'SET_ARTISTS';
const CLEAR_ALL = 'CLEAR_ALL';
const CLEAR_YEAR = 'CLEAR_YEAR';
const CLEAR_MONTH = 'CLEAR_MONTH';
const SET_YEAR = 'SET_YEAR';
const SET_MONTH = 'SET_MONTH';
const SET_ALBUMS_INDEXED = "SET_ALBUMS_INDEXED";

const initialState = {
    CLIENT_ID: '72e354833a894594b5a19ac37fbf3f06',
    token: window.localStorage.getItem('token') ? window.localStorage.getItem('token') : null,
    //user data
    artists: [],
    loaded: false,
    albums_indexed: [],
    //session data
    current_year: 0,
    current_month: 0,
    current_week: 1
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_ARTISTS:
            return {...state, artists: [...state.artists, ...action.artists]};
        case SET_ARTISTS:
            return {...state, artists: [...action.artists], loaded: true};
        case SET_TOKEN:
            return {...state, token: action.token};
        case SET_ALBUMS_INDEXED:
            return {...state, albums_indexed: action.albums_indexed};
        case CLEAR_YEAR:
            return {...state, current_year: 0};
        case CLEAR_MONTH:
            return {...state, current_month: 0};
        case SET_YEAR:
            return {...state, current_year: action.year};
        case SET_MONTH:
            return {...state, current_month: action.month};
        case CLEAR_ALL:
            return initialState;
        default:
            return state;
    }
};
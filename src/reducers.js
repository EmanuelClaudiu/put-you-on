import {get_all_artists_from_albums} from "./api/utils";

const SET_TOKEN = 'SET_TOKEN';
const ADD_ARTISTS = 'ADD_ARTISTS';
const SET_ARTISTS = 'SET_ARTISTS';
const CLEAR_NEXT_CALLS = 'CLEAR_NEXT_CALLS';
const ADD_NEXT_CALL = 'ADD_NEXT_CALL';

const initialState = {
    CLIENT_ID: '72e354833a894594b5a19ac37fbf3f06',
    REDIRECT_URI: 'http://localhost:3000/login',
    token: window.localStorage.getItem('token') ? window.localStorage.getItem('token') : null,
    BASE_URL: 'https://api.spotify.com',
    //user data
    artists_ids: [],
    artists: [],
    next_calls: []
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_ARTISTS:
            let ids = [];
            action.artists.forEach(artist => ids.push(artist.id));
            return {...state, artists: [...state.artists, ...action.artists], artists_ids: [...state.artists_ids, ...ids]};
        case SET_ARTISTS:
            let new_ids = [];
            action.artists.forEach(artist => new_ids.push(artist.id));
            return {...state, artists: [...action.artists], artists_ids: [...new_ids]};
        case CLEAR_NEXT_CALLS:
            return {...state, next_calls: []};
        case ADD_NEXT_CALL:
            return {...state, next_calls: [...state.next_calls, action.next_call]};
        case SET_TOKEN:
            return {...state, token: action.token};
        default:
            return state;
    }
};
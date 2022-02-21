const SET_TOKEN = 'SET_TOKEN';
const ADD_ARTISTS = 'ADD_ARTISTS';
const SET_ARTISTS = 'SET_ARTISTS';
const CLEAR_ALL = 'CLEAR_ALL';
const CLEAR_YEAR = 'CLEAR_YEAR';
const CLEAR_MONTH = 'CLEAR_MONTH';
const SET_YEAR = 'SET_YEAR';
const SET_MONTH = 'SET_MONTH';
const SET_ALBUMS_INDEXED = "SET_ALBUMS_INDEXED";
const ADD_TO_ALBUMS_INDEXED = "ADD_TO_ALBUMS_INDEXED";

const initialState = {
    CLIENT_ID: '72e354833a894594b5a19ac37fbf3f06',
    token: window.localStorage.getItem('token') ? window.localStorage.getItem('token') : null,
    //user data
    artists: [],
    loaded: false,
    albums_indexed: {
        '2022': { q1: [], q2: [], q3: []},
        '2021': { q1: [], q2: [], q3: []},
        '2020': { q1: [], q2: [], q3: []},
        '2019': { q1: [], q2: [], q3: []},
        '2018': { q1: [], q2: [], q3: []},
        '2017': { q1: [], q2: [], q3: []},
        '2016': { q1: [], q2: [], q3: []},
        '2015': { q1: [], q2: [], q3: []},
        '2014': { q1: [], q2: [], q3: []},
        '2013': { q1: [], q2: [], q3: []},
        '2012': { q1: [], q2: [], q3: []},
        '2011': { q1: [], q2: [], q3: []},
        '2010': { q1: [], q2: [], q3: []},
        '2009': { q1: [], q2: [], q3: []},
        '2008': { q1: [], q2: [], q3: []},
        '2007': { q1: [], q2: [], q3: []},
        '2006': { q1: [], q2: [], q3: []},
        '2005': { q1: [], q2: [], q3: []},
        '2004': { q1: [], q2: [], q3: []},
        '2003': { q1: [], q2: [], q3: []},
        '2002': { q1: [], q2: [], q3: []},
        '2001': { q1: [], q2: [], q3: []},
        '2000': { q1: [], q2: [], q3: []},
    },
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
        case ADD_TO_ALBUMS_INDEXED:
            let a = state.albums_indexed;
            if (action.month <= 4) {
                a[action.year.toString()].q1.push(action.album);
            }
            if (action.month > 4 && action.month <= 8) {
                a[action.year.toString()].q2.push(action.album);
            }
            if (action.month > 8) {
                a[action.year.toString()].q3.push(action.album);
            }
            return {...state, albums_indexed: a};
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
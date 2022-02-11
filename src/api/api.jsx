import axios from "axios";
import {get_all_artists_from_albums} from "./utils";

export const get_followed_artists = async (state, dispatch) => {
    return axios.get(`${state.BASE_URL}/v1/me/following?type=artist`, {
        headers: {
            'Accept': "application/json",
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${window.localStorage.getItem('token')}`
        },
    }).then((response) => {
        const toReturn = [];
        const artists = response.data.artists.items;
        artists.forEach(artist => toReturn.push({
            id: artist.id,
            name: artist.name,
            external_urls: artist.external_urls,
            href: artist.href,
        }));
        dispatch({type: 'ADD_ARTISTS', artists: toReturn});
        return Promise.resolve(toReturn);
    }, error => {
        return Promise.reject(error);
    });
};

export const get_library_albums_artists = async (state, dispatch) => {
    await axios.get(`${state.BASE_URL}/v1/me/albums`, {
        headers: {
            'Accept': "application/json",
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${window.localStorage.getItem('token')}`
        },
    }).then((response) => {
        const artists = get_all_artists_from_albums(response.data.items, state);
        dispatch({type: 'ADD_ARTISTS', artists: artists});
        return Promise.resolve(artists);
    }, error => {
        return Promise.reject(error);
    });
}

export const get_artists_from_your_top = async (state, dispatch) => {
    await axios.get(`${state.BASE_URL}/v1/me/top/tracks`, {
        headers: {
            'Accept': "application/json",
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${window.localStorage.getItem('token')}`
        },
    }).then((response) => {
        const artists = get_all_artists_from_albums(response.data.items, state);
        dispatch({type: 'ADD_ARTISTS', artists: artists});
        return Promise.resolve(artists);
    }, error => {
        return Promise.reject(error);
    });
}
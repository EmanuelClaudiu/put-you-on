import axios from "axios";
import {get_all_artists_from_albums} from "./utils";

const BASE_URL = 'https://api.spotify.com';

export const get_followed_artists = () => {
    return axios.get(`${BASE_URL}/v1/me/following?type=artist&limit=50`, {
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
        return Promise.resolve(toReturn);
    }, error => {
        return Promise.reject(error);
    });
};

export const get_library_albums_artists = () => {
    return axios.get(`${BASE_URL}/v1/me/albums?limit=50`, {
        headers: {
            'Accept': "application/json",
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${window.localStorage.getItem('token')}`
        },
    }).then(async (response) => {
        const artists = await get_all_artists_from_albums(response.data.items);
        return Promise.resolve(artists);
    }, error => {
        return Promise.reject(error);
    });
}

export const get_artists_from_your_top = () => {
    return axios.get(`${BASE_URL}/v1/me/top/tracks?limit=50`, {
        headers: {
            'Accept': "application/json",
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${window.localStorage.getItem('token')}`
        },
    }).then(async (response) => {
        const artists = await get_all_artists_from_albums(response.data.items);
        return Promise.resolve(artists);
    }, error => {
        return Promise.reject(error);
    });
}

export const get_albums_for_artist = (id) => {
    return axios.get(`${BASE_URL}/v1/artists/${id}/albums?limit=50`, {
        headers: {
            'Accept': "application/json",
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${window.localStorage.getItem('token')}`
        },
    }).then(response => { return Promise.resolve(response.data.items); },
            error => { return Promise.reject(error) }
    );
}
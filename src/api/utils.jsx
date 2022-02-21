import {get_albums_for_artist} from "./api";

export const get_all_artists_from_albums = (albums) => {
    const toReturn = [];
    albums.forEach(album => {
        const artists = album.album.artists;
        artists.forEach(artist => {
            toReturn.push({
                id: artist.id,
                name: artist.name,
                external_urls: artist.external_urls,
                href: artist.href,
            });
        });
    });
    return toReturn;
}

export const eliminate_duplicates = (artists) => {
    let toReturn = [];
    artists.forEach(artist => {
        let exists = false;
        toReturn.forEach(a => {
            if (artist.id === a.id) exists = true;
        });
        if (!exists) toReturn.push(artist);
    });
    return toReturn;
}

export const get_year_from_date = (date) => {
    const tokens = date.split('-');
    return tokens[0];
}

export const get_month_from_date = (date) => {
    const tokens = date.split('-');
    return tokens[1];
}

export const get_day_from_date = (date) => {
    const tokens = date.split('-');
    return tokens[2];
}

export const set_albums_indexed = (artists, dispatch) => {
    artists.forEach(artist => {
        get_albums_for_artist(artist.id).then(response => {
            response.forEach(album => {
                if (album.album_group === 'album' || album.album_group === 'single') {
                    const year = get_year_from_date(album.release_date);
                    const month = get_month_from_date(album.release_date);
                    dispatch({type: 'ADD_TO_ALBUMS_INDEXED', album: album, year: year, month: month});
                }
            });
        });
    });
}
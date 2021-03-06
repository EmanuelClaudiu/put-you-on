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

export const map_month_to_name = (month) => {
    if (month === 1) { return 'Jan' }
    if (month === 2) { return 'Feb' }
    if (month === 3) { return 'Mar' }
    if (month === 4) { return 'Apr' }
    if (month === 5) { return 'May' }
    if (month === 6) { return 'Jun' }
    if (month === 7) { return 'Jul' }
    if (month === 8) { return 'Aug' }
    if (month === 9) { return 'Sep' }
    if (month === 10) { return 'Oct' }
    if (month === 11) { return 'Nov' }
    if (month === 12) { return 'Dec' }
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
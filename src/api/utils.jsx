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

export const get_albums_indexed = (artists, available_years) => {
    let albums_indexed = [];
    available_years.forEach(year => {
        albums_indexed.push({
            year: year,
            q1: [],
            q2: [],
            q3: []
        });
    });
    artists.forEach(artist => {
        get_albums_for_artist(artist.id).then(response => {
            response.forEach(album => {
                if (album.album_group === 'album' || album.album_group === 'single') {
                    const year = get_year_from_date(album.release_date);
                    const month = get_month_from_date(album.release_date);
                    albums_indexed.forEach(a => {
                        if (a.year.toString() === year) {
                            if (month <= 4) { a.q1.push(album); }
                            if (month > 4 && month <= 8) { a.q2.push(album); }
                            if (month > 8) { a.q3.push(album); }
                        }
                    })
                }
            });
        });
    });
    return Promise.resolve(albums_indexed);
}
export const get_all_artists_from_albums = (albums, state) => {
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

export const eliminate_duplicates = (state, dispatch) => {
    let toReturn = [];
    state.artists.forEach(artist => {
        let exists = false;
        toReturn.forEach(a => {
            if (artist.id === a.id) exists = true;
        });
        if (!exists) toReturn.push(artist);
    });
    dispatch({type: 'SET_ARTISTS', artists: toReturn});
    console.log(toReturn);
    return toReturn;
}
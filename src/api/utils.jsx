export const get_all_artists_from_albums = (albums) => {
    const toReturn = [];
    albums.forEach(album => {
        const artists = album.album.artists;
        artists.forEach(artist => {
            if (!toReturn.includes(artist)) {
                toReturn.push(artist);
            }
        });
    });
    return toReturn;
}
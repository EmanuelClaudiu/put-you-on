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
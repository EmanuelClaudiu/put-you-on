import {get_artists_from_your_top, get_followed_artists, get_library_albums_artists} from "./api";
import {eliminate_duplicates} from "./utils";

export const initialize_artists = async () => {
    let toReturn = [];
    await get_followed_artists().then(response => {
        toReturn = [...toReturn, ...response];
    });
    await get_library_albums_artists().then(response => {
        toReturn = [...toReturn, ...response];
    });
    await get_artists_from_your_top().then(response => {
        toReturn = [...toReturn, ...response];
    });
    toReturn = eliminate_duplicates(toReturn);
    return toReturn;
};
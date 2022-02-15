import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import "./Home.css";
import {get_artists_from_your_top, get_followed_artists, get_library_albums_artists} from "../api/api";
import {eliminate_duplicates} from "../api/utils";

const HomePage = () => {

    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [artists, setArtists] = useState('');

    useEffect(async () => {
        const token = window.localStorage.getItem('token') ? window.localStorage.getItem('token') : null;
        if (token) {
            dispatch({type: 'SET_TOKEN', token: token});
            dispatch({type: 'CLEAR_NEXT_CALLS'});
            await get_followed_artists(state, dispatch);
            await get_library_albums_artists(state, dispatch);
            await get_artists_from_your_top(state, dispatch);
        } else {
            navigate('/');
        }
    }, []);

    return (<>
        <div>
            {artists.length && artists.map((artist, id) => <p key={id}>{artist.name + ' - ' + artist.id}</p>)}
            <button onClick={() => {
                setArtists(state.artists);
                console.log(state.artists);
                console.log(state.artists_ids);
            }}>Show Artists</button>
            {state.artists.length >= 0 && <button onClick={() => {eliminate_duplicates(state, dispatch)}}>Engage</button>}
        </div>
    </>);
};

export default HomePage;
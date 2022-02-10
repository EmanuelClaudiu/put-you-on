import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";

const selectState = state => state;

const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';

const LoginPage = () => {
    const status = useSelector(selectState);
    const dispatch = useDispatch();

    const [token, setToken] = useState(status.token);

    useEffect(() => {
        console.log(status);
        if  (token === null) {

        } else {
            const hash = window.location.hash;
            setToken(hash.substring(1).split('&').find(elem => elem.startsWith('access_token')).split('=')[1]);
            console.log(token);
            dispatch({type: 'SET_TOKEN', token: token});
        }
    }, []);

    return(<>
        <div>
            <h1>Spotify Makai</h1>
            <button><a href={`${AUTH_ENDPOINT}?client_id=${status.CLIENT_ID}&redirect_uri=${status.REDIRECT_URI}&response_type=token`}>Log into Spotify</a></button>
        </div>
    </>);
};

export default LoginPage;
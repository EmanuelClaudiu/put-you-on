import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';

const LoginPage = () => {
    const status = useSelector(state => state);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [url, setUrl] = useState('');

    useEffect(() => {
        if (!window.localStorage.getItem('token')) {
            const hash = window.location.hash;
            try {
                const token = hash.substring(1).split('&').find(elem => elem.startsWith('access_token')).split('=')[1];
                window.localStorage.setItem('token', token);
                dispatch({type: 'SET_TOKEN', token: token});
                navigate('/');
            } catch (error) {
                setUrl(`${AUTH_ENDPOINT}?client_id=${status.CLIENT_ID}&redirect_uri=${status.REDIRECT_URI}&response_type=token` +
                        `&scope=user-follow-read user-library-read user-top-read`);
            }
        } else {
            navigate('/');
        }
    }, []);

    return(<>
        <div>
            <h1>Spotify Makai</h1>
            <button><a href={url}>Log into Spotify</a></button>
        </div>
    </>);
};

export default LoginPage;
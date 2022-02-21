import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import "./Home.css";
import {initialize_albums, initialize_artists} from "../api/initializers";

const HomePage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(async () => {
        const token = window.localStorage.getItem('token') ? window.localStorage.getItem('token') : null;
        if (!token) {
            navigate('/');
        }
    }, []);

    return (<>
        <div>
            <button onClick={async () => {
                await initialize_artists().then(async response => {
                    dispatch({type: 'SET_ARTISTS', artists: response});
                    initialize_albums(response, dispatch);
                });
                navigate('/pick_period');
            }}>Engage</button>
            <button onClick={() => navigate('/logout')}>Logout</button>
        </div>
    </>);
};

export default HomePage;
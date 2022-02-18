import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import "./Home.css";
import {initialize_artists} from "../api/initializers";

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
                await initialize_artists().then(response => {
                    dispatch({type: 'SET_ARTISTS', artists: response});
                })
                navigate('/pick_period');
            }}>Engage</button>
            <button onClick={() => navigate('/logout')}>Logout</button>
        </div>
    </>);
};

export default HomePage;
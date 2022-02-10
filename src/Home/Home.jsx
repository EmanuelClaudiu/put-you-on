import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

const HomePage = () => {

    const status = useSelector(state => state);
    const dispatch = useDispatch();
    const [token, setToken] = useState(null);
    let navigate = useNavigate();

    useEffect(() => {
        if (window.localStorage.getItem('token')) {
            setToken(window.localStorage.getItem('token'));
            dispatch({type: 'SET_TOKEN', token: token});
        } else {
            navigate('/');
        }
    }, []);

    return (<>
        <div>
            Makai Home
        </div>
    </>);
};

export default HomePage;
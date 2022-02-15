import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

const LogoutPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        window.localStorage.removeItem('token');
        dispatch({type: 'CLEAR_ALL'});
        navigate('/');
    }, []);

    return(<></>);
};

export default LogoutPage;
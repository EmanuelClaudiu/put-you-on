import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

const Root = () => {

    const navigate = useNavigate();

    useEffect(() => {
        if (window.localStorage.getItem('token')) {
            navigate('/home');
        } else {
            navigate('/login');
        }
    }, []);

    return (<>
    </>);
};

export default Root;
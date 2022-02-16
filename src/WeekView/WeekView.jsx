import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

const WeekView = () => {

    const state = useSelector(state => state);
    const navigate = useNavigate();

    useEffect(() => {
        if (state.artists.length === 0) {
            navigate('/home');
        }
    }, []);

    return (<>
        <button onClick={() => {console.log(state)}}>Show State</button>
    </>)
};

export default WeekView;
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

const PickMonth = () => {

    const available_months = [['Jan', 1], ['Feb', 2], ['Mar', 3], ['Apr', 4], ['May', 5],
        ['Jun', 6], ['Jul', 7], ['Aug', 8], ['Sep', 9], ['Oct', 10], ['Nov', 11], ['Dec', 12]];
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
    }, []);

    return (<>
        {available_months.length >= 0 && available_months.map((month, i) => <button
            key={i}
            onClick={() => {
                dispatch({type: 'SET_MONTH', month: month[1]});
                navigate('/week_view')
            }}
        >{month[0]}</button>)}
    </>);
};

export default PickMonth;
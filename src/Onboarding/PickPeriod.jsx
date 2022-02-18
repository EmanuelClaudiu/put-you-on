import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

const PickPeriod = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const available_years = [2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013,
        2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000];
    const available_months = [['Jan', 1], ['Feb', 2], ['Mar', 3], ['Apr', 4], ['May', 5],
        ['Jun', 6], ['Jul', 7], ['Aug', 8], ['Sep', 9], ['Oct', 10], ['Nov', 11], ['Dec', 12]];
    const state = ['pick-year', 'pick-month'];
    const [current_state, setCurrentState] = useState(state[0]);

    return (<>
        {current_state === state[0] && <div>
            <p>Pick Year</p>
            {available_years.length >= 0 && available_years.map((year, i) => <button
                key={i}
                onClick={() => {
                    dispatch({type: 'SET_YEAR', year: year});
                    setCurrentState(state[1]);
                }}
            >{year}</button>)}
        </div>}
        {current_state === state[1] && <div>
            <p>Pick Month</p>
            {available_months.length >= 0 && available_months.map((month, i) => <button
                key={i}
                onClick={() => {
                    dispatch({type: 'SET_MONTH', month: month[1]});
                    navigate('/week_view')
                }}
            >{month[0]}</button>)}
        </div>}
    </>);
};

export default PickPeriod;
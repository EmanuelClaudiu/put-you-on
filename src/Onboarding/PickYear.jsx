import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

const PickYear = () => {

    const available_years = [2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013,
        2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000];
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
    }, []);

    return (<>
        {available_years.length >= 0 && available_years.map((year, i) => <button
            key={i}
            onClick={() => {
                dispatch({type: 'SET_YEAR', year: year});
                navigate('/pick_month');
            }}
        >{year}</button>)}
    </>);
};

export default PickYear;
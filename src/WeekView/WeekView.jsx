import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {initialize_albums} from "../api/initializers";

const WeekView = () => {

    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const available_years = [2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013,
        2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000];

    useEffect(() => {
        if (state.artists.length === 0) {
            navigate('/home');
        }
    }, []);

    return (<>
        <button onClick={() => {console.log(state)}}>Show State</button>
        <button onClick={async () => {
            await initialize_albums(state.artists, available_years).then(response =>
                dispatch({type: 'SET_ALBUMS_INDEXED', albums_indexed: response})
            );
        }}>Show Albums</button>
        <button onClick={() => {navigate("/pick_period")}}>Switch Year</button>
        <button onClick={() => {navigate("/logout")}}>Logout</button>
        {state.albums_indexed.length >= 0 && state.albums_indexed.map((year, i) => <div>
            <h1 key={i}>{year.year}</h1>
            <div>
                {year.q1 && year.q1.map((album, i1) => <div key={i1}>
                    <p>{album.name} - <a href={album.external_urls.spotify}>{album.external_urls.spotify}</a></p>
                </div>)}
                {year.q2 && year.q2.map((album, i1) => <div key={i1}>
                    <p>{album.name} - <a href={album.external_urls.spotify}>{album.external_urls.spotify}</a></p>
                </div>)}
                {year.q2 && year.q2.map((album, i1) => <div key={i1}>
                    <p>{album.name} - <a href={album.external_urls.spotify}>{album.external_urls.spotify}</a></p>
                </div>)}
            </div>
        </div>)}
    </>)
};

export default WeekView;
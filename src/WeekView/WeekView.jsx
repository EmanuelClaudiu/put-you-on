import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {initialize_albums} from "../api/initializers";
import {get_month_from_date, map_month_to_name} from "../api/utils";

const WeekView = () => {

    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [quarter_albums, setQuarterAlbums] = useState();
    const go_back_one_year = '|<';
    const go_forward_one_year = '>|';
    const go_back_one_week = '<';
    const go_forward_one_week = '>';

    useEffect(() => {
        if (state.artists.length === 0) {
            navigate('/home');
        }
        if (state.current_month <= 4) { setQuarterAlbums(state.albums_indexed[state.current_year.toString()].q1) }
        if (state.current_month >= 5 && state.current_month <= 8) { setQuarterAlbums(state.albums_indexed[state.current_year.toString()].q2) }
        if (state.current_month >= 9) { setQuarterAlbums(state.albums_indexed[state.current_year.toString()].q3) }
    }, []);

    return (<>
        <button onClick={() => {navigate("/pick_period")}}>Switch Year</button>
        <button onClick={() => {navigate("/logout")}}>Logout</button>
        <h1>{state.current_year}</h1>
        <h2>{map_month_to_name(state.current_month)}</h2>
        <button onClick={() => {
            if (state.current_month !== 1) {
                dispatch({type: 'SET_MONTH', month: state.current_month - 1});
                navigate('/week_view');
            }
        }}>{go_back_one_week}</button>
        <button onClick={() => {
            if (state.current_month !== 12) {
                dispatch({type: 'SET_MONTH', month: state.current_month + 1});
                navigate('/week_view');
            }
        }}>{go_forward_one_week}</button>
        {quarter_albums && quarter_albums.map((album, index) => <div key={index}>
            { parseInt(get_month_from_date(album.release_date)) === parseInt(state.current_month) && <div>
                <img src={album.images[0].url} width={100} height={100}/>
                <p>{album.name} - <a href={album.external_urls.spotify}>{album.external_urls.spotify}</a></p>
            </div>}
        </div>)}

    </>)
};

export default WeekView;
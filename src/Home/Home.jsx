import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import "./Home.css";

const HomePage = () => {

    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(async () => {
        const token = window.localStorage.getItem('token') ? window.localStorage.getItem('token') : null;
        if (token) {
            await dispatch({type: 'SET_TOKEN', token: token});
            await getFollowing();
            await getLibrary();
            await getTop();
        } else {
            navigate('/');
        }
    }, []);

    const getFollowing = async () => {
        return axios.get(`${state.BASE_URL}/v1/me/following?type=artist`, {
           headers: {
               'Accept': "application/json",
               'Content-Type': 'application/json',
               'Authorization': `Bearer ${window.localStorage.getItem('token')}`
           },
        }).then((response) => {
            dispatch({type: 'ADD_ARTISTS', artists: response.data.artists.items});
            return Promise.resolve(response.data.artists.items);
        });
    }

    const getLibrary = async () => {
        await axios.get(`${state.BASE_URL}/v1/me/albums`, {
            headers: {
                'Accept': "application/json",
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${window.localStorage.getItem('token')}`
            },
        }).then((response) => {
            return Promise.resolve(response.data.items);
        });
    }

    const getTop = async () => {
        await axios.get(`${state.BASE_URL}/v1/me/top/tracks`, {
            headers: {
                'Accept': "application/json",
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${window.localStorage.getItem('token')}`
            },
        }).then((response) => {
            return Promise.resolve(response.data.items);
        });
    }

    return (<>
        <div>
            <button onClick={() => {console.log(state.artists_ids)}}>Show Artists</button>
        </div>
    </>);
};

export default HomePage;
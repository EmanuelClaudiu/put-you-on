import {useDispatch, useSelector} from "react-redux";

const selectStatus = state => state.logged_in;

const LoginPage = () => {
    const status = useSelector(selectStatus);
    const dispatch = useDispatch();

    const makai = (event) => {
        const b = 2;
        const a = 1;
        const c = event;
        dispatch({type: 'LOGOUT'});
    }

    return(<>
        <div>
            {status && <p>Makai</p>}
            {!status && <p>No Makai</p>}
            <button onClick={() => dispatch({type: 'LOGIN'})}>Login</button>
            <button onClick={makai}>Logout</button>
        </div>
    </>);
};

export default LoginPage;
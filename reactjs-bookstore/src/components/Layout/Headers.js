import React, { useEffect } from 'react';
import 'antd/dist/antd.css';
import { NavLink } from "react-router-dom";
import { Layout, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
const { Header } = Layout;

function Headers() {
    const token = useSelector(state => state.token.value);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: "AUTHORIZATION",
            token: localStorage.getItem("token"),
            users: JSON.parse(localStorage.getItem("users"))
        });
    }, [dispatch])

    const handleOut = () => {
        dispatch({ type: "SIGN_OUT" });
        localStorage.setItem("token", "");
    }
    return (
        <Header theme="dark" mode="horizontal" style={{ backgroundImage: 'linear-gradient(to right, #071429, #00293e, #003c40, #004e2f, #455b14)' }}>
            <Button type="link"><h2 style={{ color: '#A8EB12' }}>BookStore</h2></Button>
            <div style={{ float: 'right' }}>
                {token === "" ?
                    <>
                        <Button type="link" ><NavLink exact activeClassName="active" to="/">Home</NavLink></Button>
                        <Button type="link" ><NavLink exact activeClassName="active" to="/signin">Sign In</NavLink></Button>
                        <Button type="link" ><NavLink exact activeClassName="active" to="/signup">Sign Up</NavLink></Button>
                    </>
                    :
                    <>
                        <Button type="link" >Welcome, {token}</Button>
                        <Button type="link" onClick={handleOut}>Sign Out</Button>
                    </>
                }
            </div>
        </Header>
    );
}

export default Headers;
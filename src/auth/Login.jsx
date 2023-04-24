import supabase from "../config/supabaseClient.js";
import React, {useEffect, useState} from "react";
import {Navigate} from 'react-router-dom'

export default function Login() {
    const [user, setUser] = useState(null)

    async function signInWithEmail(email, password) {
        const {data, error} = await supabase.auth.signInWithPassword({
            email,
            password
        });
        setUser(user)
    }

    useEffect(() => {
        const checkUser = async () => {
            const {data: {user}} = await supabase.auth.getUser()
            setUser(user)
        }

        checkUser()
    }, [user]);

    const loginFormHandler = async (e) => {
        e.preventDefault()
        signInWithEmail(e.target.email.value, e.target.password.value)
    }

    // if user is already logged in, redirect to homepage
    if (user) {
        return <Navigate to="/"/>
    }

    // else show login form
    return (
        <React.Fragment>
            <form action="" onSubmit={loginFormHandler}>
                <p>Username: test@test.com</p>
                <p>Password: 123456</p>
                <input type="email" name="email" placeholder="Email:"/>
                <input type="password" name="password" placeholder="Password:"/>
                <button className="btn" type="submit">Login</button>
            </form>
        </React.Fragment>
    )
}
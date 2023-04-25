import supabase from "../config/supabaseClient.js";
import React, {useEffect, useState} from "react";
import {Navigate} from 'react-router-dom'

export default function Login() {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)
    const [err, setErr] = useState(null)

    async function signInWithEmail(email, password) {
        const {data, error} = await supabase.auth.signInWithPassword({
            email,
            password
        });
        setUser(data?.user)
        setErr(error?.message)
    }

    useEffect(() => {
        const checkUser = async () => {
            setLoading(true)
            const {data: {user}} = await supabase.auth.getUser()
            setLoading(false)
            setUser(user)
        }

        checkUser()
    }, [user]);

    const loginFormHandler = async (e) => {
        e.preventDefault()
        signInWithEmail(e.target.email.value, e.target.password.value)
    }

    // // if user is already logged in, redirect to homepage
    if (user) {
        return <Navigate to="/admin"/>
    }

    // else show login form
    return (
        <React.Fragment>
            {err && <p style={{marginBottom: "10px", color: "red", fontWeight: "bolder"}}>{err}</p>}
            <form action="" onSubmit={loginFormHandler}>
                <p>Username: test@test.com</p>
                <p>Password: 123456</p>
                <input type="email" name="email" placeholder="Email:"/>
                <input type="password" name="password" placeholder="Password:"/>
                <button className="btn" type="submit">{loading ? 'Please wait...' : 'Login'}</button>
            </form>
        </React.Fragment>
    )
}
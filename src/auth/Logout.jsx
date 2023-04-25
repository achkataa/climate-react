import supabase from "../config/supabaseClient.js";
import React, {useEffect, useState} from "react";
import {Navigate} from 'react-router-dom'

export default function Logout() {
    useEffect(() => {
        const logout = async () => {
            await supabase.auth.signOut();
        }

        logout()
    }, []);

    return <Navigate to="/" replace/>
}
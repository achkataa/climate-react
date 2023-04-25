import {AuthContext} from "../App.jsx";
import {useContext} from "react";
import {Navigate, Outlet} from "react-router-dom";

export default function Admin(props) {
    const {session} = useContext(AuthContext)
    if (session) {
        return  props.children
    }

    return <Navigate to="/login" replace/>
}
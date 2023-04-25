import Products from "./pages/Products.jsx";
import './styles/App.css'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./components/Header.jsx";
import Product from "./pages/Product.jsx";
import Footer from "./components/Footer.jsx";
import Contact from "./pages/Contact.jsx";
import React, {useEffect, useState} from "react";
import Home from "./pages/Home.jsx";
import Login from "./auth/Login.jsx";
import Logout from "./auth/Logout.jsx";
import supabase from "./config/supabaseClient.js";
import Admin from "./auth/Admin.jsx";
import ConditionersList from "./auth/ConditionersList.jsx";
import CondirionersEdit from "./auth/ConditionersEdit.jsx";
//create context
export const AuthContext = React.createContext()

const AuthProvider = (props) => {
    const [session, setSession] = useState(null)

    useEffect(() => {
        supabase.auth.getSession().then(({data: {session}}) => {
            setSession(session)
        });

        const {
            data: {subscription},
        } = supabase.auth.onAuthStateChange((_, session) => {
            setSession(session)
        })


        return () => subscription.unsubscribe()

    }, [])

    return (
        <AuthContext.Provider value={{session}}>
            {props.children}
        </AuthContext.Provider>
    )
}

function App() {

    return (
        <div>
            <AuthProvider>
                <Router>
                    <Header/>
                    <Routes>
                        <Route name="home" path="/" index={true} element={<Home/>}/>
                        <Route name="product" path="product/:id" element={<Product/>}/>
                        <Route name="login" path="login" element={<Login/>}/>
                        <Route name='contact' path="contact" element={<Contact/>}/>
                        <Route name="login" path="logout" element={<Logout/>}/>
                        <Route path="admin" element={<Admin><ConditionersList/></Admin>}></Route>
                        <Route path="admin/conditioner/:id/edit" element={<Admin><CondirionersEdit/></Admin>}></Route>
                        <Route path="*" element={<p>There's nothing here: 404!</p>}/>
                    </Routes>
                    <Footer/>
                </Router>
            </AuthProvider>
        </div>
    )
}

export default App

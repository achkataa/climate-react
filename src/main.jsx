import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Contacts from "./pages/Contacts.jsx";
import Product from "./pages/Product.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <Router>
            <Header/>
            <Routes>
                <Route name="home" path="/" element={<App/>}/>
                <Route name="product" path="/product/:id" element={<Product/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
            </Routes>
            <Footer/>
        </Router>
    </>
)

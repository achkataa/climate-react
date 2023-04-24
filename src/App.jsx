import Products from "./pages/Products.jsx";
import './styles/App.css'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./components/Header.jsx";
import Product from "./pages/Product.jsx";
import Footer from "./components/Footer.jsx";
import Contact from "./pages/Contact.jsx";
import React from "react";
import Home from "./pages/Home.jsx";
import Login from "./auth/Login.jsx";
import Logout from "./auth/Logout.jsx";

function App() {

  return (
    <div>
        <Router>
            <Header/>
            <Routes>
                <Route name="home" path="/" element={<Home/>}/>
                <Route name="product" path="/product/:id" element={<Product/>}/>
                <Route name="login" path="/login" element={<Login/>}/>
<<<<<<< HEAD
                <Route name='contact' path="/contact" element={<Contact/>}/>
=======
                <Route name="login" path="/logout" element={<Logout/>}/>
>>>>>>> 93484436f5b19e75dadd85f4f0d59609e4cd83da
            </Routes>
            <Footer/>
        </Router>
    </div>

  )
}

export default App

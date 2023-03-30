import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/contacts',
    element: <Contacts/>
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router}/>);

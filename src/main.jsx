import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
console.log(import.meta.env.VITE_REACT_APP_SUPABASE_URL)

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </>
)

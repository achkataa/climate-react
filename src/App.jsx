import Header from "./Header"
import Products from "./Products.jsx";
import Footer from "./Footer"
import './styles/App.css'
import products from "../db"

function App() {

  return (
    <div>
      <Header/>
      <Products
        products={products}
      />
      <Footer/>
    </div>

  )
}

export default App

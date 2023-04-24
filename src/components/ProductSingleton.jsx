import Rating from "./Rating.jsx";
import {Link} from "react-router-dom";

function ProductSingleton({product}) {
    return (
        <div key={product?.id} className="climate climat1">
            <div className="img-container">
                <img src={`./src/images/klimatik-${product?.id}/${product?.img}`} alt="снимка"/>
            </div>
            <Rating/>
            <div className="info">
                <p className="model">{product?.model}</p>
                <p className="price">{product?.price.toFixed(2)} лв.</p>
            </div>
            <div className="btn-wrapper">
                <Link className="btn" id={product?.id} to={`/product/${product?.id}`}>РАЗГЛЕДАЙ</Link>
            </div>
        </div>
    )
}

export default ProductSingleton
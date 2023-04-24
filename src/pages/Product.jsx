import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import supabase from "../config/supabaseClient.js";
import '../styles/Product.css'

export default function Product() {
    const { id } = useParams();

    const [conditioner, setConditioner] = useState(null)

    useEffect(() => {
        async function fetchProduct() {
            const { data, error } = await supabase
                .from('conditioner_details')
                .select('details')
                .eq('conditioner_id', id)




            if (!error) {
                setConditioner(data[0].details)
                console.log(data[0].details)
            }
        }

        fetchProduct()
    }, [])



    return (
        <section className="description">
            <h1 className="model">{conditioner?.model}</h1>
            <div className="contact">
              <p className="price">{conditioner?.price.toFixed(2)} лв.</p>
              <Link to={`/contact`}>Свържете се с нас</Link>
              
            </div>

            <div className="characteristics">
                <h2>Описание/Характеристики<i className="fa-solid fa-caret-down"></i></h2>
                <ul className="char-list">
                    {conditioner?.description.map(desc => <li key={conditioner.description.indexOf(desc) - 1}>{desc}</li>)}
                </ul>
            </div>
        </section>
    )
}
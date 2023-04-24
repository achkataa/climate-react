import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import supabase from "../config/supabaseClient.js";

export default function Product() {
    const { id } = useParams();

    const [conditioner, setConditioner] = useState(null)

    useEffect(() => {
        async function fetchProduct() {
        }

        fetchProduct()
    }, [])



    return (
        <ul>
            <li>
                {conditioner?.model}
            </li>
            <li>
                {conditioner?.price}
            </li>
        </ul>
    )
}
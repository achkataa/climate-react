import {useEffect, useState} from "react";
import supabase from "../config/supabaseClient.js";
import {Link, useSearchParams} from "react-router-dom";

export default function ConditionersList() {
    //move to custom hook later
    const [conditioners, setConditioners] = useState([])
    const [searchParams] = useSearchParams();

    useEffect(() => {
        async function fetchProducts() {
            const {data, error} = await supabase
                .from('conditioners')
                .select('*')

            if (!error) {
                setConditioners(data)
            }
        }

        fetchProducts()
    }, [])

    return (
        <div>
            {searchParams.get('success') && <h2 style={{color: 'green'}}>Conditioner edited successfully</h2>}
            <h3>Edit Details for Conditioners</h3>
            <p>Choose conditioner and click 'Edit'</p>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Model</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {conditioners.length > 0 && conditioners.map(conditioner => <tr key={conditioner.id}>
                        <td>{conditioner.id}</td>
                        <td>{conditioner.model}</td>
                        <td>
                            <Link to={`/admin/conditioner/${conditioner.id}/edit`}>EDIT</Link>
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    )
}

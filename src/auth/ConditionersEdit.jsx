import {useEffect, useState} from "react";
import supabase from "../config/supabaseClient.js";
import DivContainer from "./DetailsInputDivWrapper.jsx";
import {Link, useNavigate, useParams} from "react-router-dom";

export default function ConditionersList() {
    const {id} = useParams()
    const navigate = useNavigate()
    const [conditioner, setConditioner] = useState(null)
    const [detailsInputNumber, setDetailsInputNumber] = useState(1)

    useEffect(() => {
        async function fetchProduct() {
            const {data, error} = await supabase
                .from('conditioners').select('*, conditioner_details(details)').eq('id', id).single()

            if (!error) {
                console.log(data)
                setConditioner(data)
            }
        }

        fetchProduct()
    }, [])


    const InsertDetails = async ({conditioner_id, ...rest}) => {
        const {error} = await supabase
            .from('conditioner_details')
            .upsert({conditioner_id, details: rest}, { onConflict: 'conditioner_id' });

        if (!error) {
            navigate(`/admin?success=true`)
        }
    }

    const formSubmitHandler = (e) => {
        e.preventDefault()
        const data = new FormData(e.target);
        const formData = Object.fromEntries(data.entries());
        InsertDetails(formData)
    }

    if (conditioner) {
        return (
            <>
                <h3>Edit Details for: <em>{conditioner.model}</em></h3>

                <form action="" onSubmit={formSubmitHandler}>
                    <DivContainer number={detailsInputNumber} details={conditioner.details}/>
                    <input type="hidden" name="conditioner_id" value={conditioner.id} />
                    <button onClick={() => setDetailsInputNumber((prev) => prev + 1)} type="button">Add detail</button>
                    <button onClick={() => setDetailsInputNumber((prev) => prev - 1)} type="button">Remove detail
                    </button>
                    <button>Save</button>
                </form>

                {/*temp solution*/}
                {conditioner.conditioner_details && <div>
                    <h3>Details:</h3>
                    <ul>
                        {Object.keys(conditioner.conditioner_details.details).map((key, val) => <li key={key}>{conditioner.conditioner_details.details[key]}</li>)}
                    </ul>
                </div>}
            </>
        )
    }

    return <h1>Loading...</h1>
}
import { useParams } from "react-router-dom"


export default function ItemDetails() {
    const { id } = useParams()

    return (
        <div>
            <p>{id}</p>
        </div>
    )
}
import { useParams } from "react-router-dom"

function Task6() {
    let {id} = useParams();
    return(
        <>
            <h1>Params id : {id}</h1>
        </>
    )
}

export default Task6
import { useState } from 'react'
function PiggyCard(props)
{
    
    const [dataShow, setDataShow] = useState(false)

    function showData(e)
    {
        setDataShow(!dataShow)
    }


    
    return (
        <div className="pigTile" onClick={showData}>
            <h1>{props.name}</h1>
            <img src={props.image} className="pigImage"/>
            {dataShow ? (<div><h4>Specialty: {props.specialty}</h4><p>Weight: {props.weight} kg</p><p>Highest Medal Achieved: {props['highest medal achieved']}</p></div>) : null}
        </div>
    )
}

export default PiggyCard

{/* <h2>{props.specialty}</h2>
<p>Weight: {props.weight}</p>
<p>Highest Medal Achieved: {props['highest medal achieved']}</p> */}
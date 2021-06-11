import PiggyCard from "./PiggyCard"

function PiggyContainer({pigData})
{
    //console.log(pigData)
    return (
        <div className="ui grid container align-center">
            {pigData.map(pig => <PiggyCard {...pig}/>)}
        </div>
    )
}

export default PiggyContainer
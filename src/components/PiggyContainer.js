import PiggyCard from "./PiggyCard"

function PiggyContainer({pigData})
{
    //console.log(pigData)
    return (
        <div className="ui grid container  ">
            {pigData.map(pig => <PiggyCard {...pig} className="three wide column"/>)}
        </div>
    )
}

export default PiggyContainer
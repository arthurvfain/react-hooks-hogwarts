import { useState } from "react";
function PiggyCard(props) {
  const [dataShow, setDataShow] = useState(false);

  function showData(e) {
    setDataShow(!dataShow);
  }

  return (
    <div class="ui card" onClick={showData}>
      <div class="image">
        <img src={props.image} />
      </div>
      <div class="content">
        <a class="header">{props.name}</a>

        <div class="description">
          {dataShow ? (
            <div>
              <h4>Specialty: {props.specialty}</h4>
              <p>Weight: {props.weight} kg</p>
              <p>Highest Medal Achieved: {props["highest medal achieved"]}</p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default PiggyCard;

{
  /* <h2>{props.specialty}</h2>
<p>Weight: {props.weight}</p>
<p>Highest Medal Achieved: {props['highest medal achieved']}</p> */
}

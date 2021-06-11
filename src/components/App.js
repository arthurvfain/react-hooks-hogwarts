import React, { useState } from "react";
import Nav from "./Nav";
import PiggyContainer from "./PiggyContainer";
import hogs from "../porkers_data";
import Piggies from "./Piggies";

function App() {
  const [sortPig, setSortPig] = useState({ name: false, weight: false });
  const [piggy, setPiggy] = useState(hogs);
  const [greaseButton, setGreaseButton] = useState(true);
  const originalPiggies = hogs;

  function isGreasy() {
    let greaseArr = piggy.filter((grease) => grease.greased);
    // setGreaseButton(!greaseButton)
    setPiggy(greaseArr);
  }

  function handleGrease() {
    greaseButton ? isGreasy() : setPiggy(hogs);
    setGreaseButton(!greaseButton);
  }

  function handlePigSort(e) {
    e.target.name === "name" ? sortByName() : sortByWeight();

    // Use the spread (...) operator to clone the state / prompt React to ackowledge the state change
  }

  function sortByName() {
    if (!sortPig.name) {
      let originalList = [...piggy];

      const sortedList = originalList.sort((currentPig, nextPig) => {
        let nameCurrentPig = currentPig.name.toLowerCase();
        let nameNextPig = nextPig.name.toLowerCase();

        // Compare the two vote amounts
        if (nameCurrentPig < nameNextPig) return -1;
        if (nameCurrentPig > nameNextPig) return 1;
        return 0;
      });

      console.log(sortedList);

      setPiggy(sortedList);
    } else {
      setPiggy(hogs);
    }

    setSortPig({ name: !sortPig.name, weight: sortPig.weight });
    // console.log(sortPig)
  }

  function sortByWeight() {
    if (!sortPig.weight) {
      let originalList = [...piggy];

      const sortedList = originalList.sort((currentPig, nextPig) => {
        let nameCurrentPig = currentPig.weight;
        let nameNextPig = nextPig.weight;

        // Compare the two vote amounts
        if (nameCurrentPig > nameNextPig) return -1;
        if (nameCurrentPig < nameNextPig) return 1;
        return 0;
      });

      console.log(sortedList);

      setPiggy(sortedList);
    } else {
      setPiggy(hogs);
    }

    setSortPig({ name: sortPig.name, weight: !sortPig.weight });
    // console.log(sortPig)
  }

  return (
    <div className="App">
      <Nav />
      <button onClick={handleGrease}>
        {greaseButton ? "greasy" : "all pigs"}
      </button>
      <br />
      <button name="name" onClick={handlePigSort}>
        {sortPig.name ? "unsort" : "sort by name"}
      </button>
      <button name="weight" onClick={handlePigSort}>
        {sortPig.weight ? "unsort" : "sort by weight"}
      </button>
      <br />
      <br />
      <PiggyContainer pigData={piggy} />
    </div>
  );
}

export default App;

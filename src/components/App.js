import React, { useState } from "react";
import Nav from "./Nav";
import PiggyContainer from "./PiggyContainer"
import hogs from "../porkers_data";
import Piggies from "./Piggies"



function App() {

  const [sortPig, setSortPig] = useState({name : false, weight : false})
  const [piggy, setPiggy] = useState(hogs)
  const [greaseButton, setGreaseButton] = useState(true)
  const originalPiggies = hogs

  function isGreasy() {
    let greaseArr = piggy.filter(grease => grease.greased)
    // setGreaseButton(!greaseButton)
    setPiggy(greaseArr)
  }

  function handleGrease() {
   greaseButton  ? isGreasy() : setPiggy(hogs)
   setGreaseButton(!greaseButton)
  }

  function handlePigSort(e) {
    e.target.name === 'name' ? sortByName() : sortByWeight()
  }

  function sortByName() {
    

    
    
    setSortPig({name: !sortPig.name, weight: sortPig.weight})
    // console.log(sortPig)
  }


  function sortByWeight(){
    
    console.log('sorted by weight')
  }

  

  return (
    <div className="App">
      <Nav />
      <button onClick={handleGrease}>{greaseButton ? "greasy" : "all pigs"}
      </button>
      <br />
      <button name="name" onClick={handlePigSort}>{sortPig.name ? "unsort" : "sort by name"}</button>
      <button name="weight" onClick={handlePigSort}>{sortPig.weight ? "unsort" : "sort by weight"}</button>
      <br /> 
      <br />
      <PiggyContainer pigData = {piggy}/>
    </div>
  );
}

export default App;


// function sortPaintings() {
    
//   // Use the spread (...) operator to clone the state / prompt React to ackowledge the state change
//   let originalList = [...paintingsData];
  
//   const sortedList = originalList.sort((currentPainting, nextPainting) => {
//     let votesCurrentPainting = currentPainting.votes;
//     let votesNextPainting = nextPainting.votes;

//     // Compare the two vote amounts
//     if (votesCurrentPainting < votesNextPainting) return -1;
//     if (votesCurrentPainting > votesNextPainting) return 1;
//     return 0;
//   });

//   paintingsSetter(sortedList);
// }
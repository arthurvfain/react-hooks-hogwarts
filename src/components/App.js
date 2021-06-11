import React, { useState } from "react";
import Nav from "./Nav";
import PiggyContainer from "./PiggyContainer"

import hogs from "../porkers_data";


function App() {

  const [piggy, setPiggy] = useState(hogs)

  return (
    <div className="App">
      <Nav />
      <PiggyContainer pigData = {piggy}/>
    </div>
  );
}

export default App;

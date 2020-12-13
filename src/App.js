import React from "react";
import Header from "./Components/Header/Header";
import Introduction from "./Components/Introduction/Introduction";
import Projects from "./Components/Projects/Projects";
import ComputerSkills from "./Components/ComputerSkills/ComputerSkills";

function App() {
  return (
    <div>
      <Header/>
      <Introduction/>
      <Projects/>
      <ComputerSkills/>
    </div>
  );
}

export default App;

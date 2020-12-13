import React from "react";
import Header from "./Components/Header/Header";
import Introduction from "./Components/Introduction/Introduction";
import Projects from "./Components/Projects/Projects";
import ComputerSkills from "./Components/ComputerSkills/ComputerSkills";
import MobileContact from "./Components/MobileContact/MobileContact";

function App() {
  return (
    <div>
      <Header/>
      <Introduction/>
      <Projects/>
      <ComputerSkills/>
      <MobileContact/>
    </div>
  );
}

export default App;

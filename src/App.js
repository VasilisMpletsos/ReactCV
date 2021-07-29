import React, { Fragment } from "react";
import Header from "./Components/Header/Header";
import Introduction from "./Components/Introduction/Introduction";
import Projects from "./Components/Projects/Projects";
import ComputerSkills from "./Components/ComputerSkills/ComputerSkills";
import MobileContact from "./Components/MobileContact/MobileContact";
import WorkExperience from "./Components/WorkExperience/WorkExperience";

function App() {
  return (
    <Fragment>
      <Header/>
      <Introduction/>
      <Projects/>
      <ComputerSkills/>
      <WorkExperience/>
      <MobileContact/>
    </Fragment>
  );
}

export default App;

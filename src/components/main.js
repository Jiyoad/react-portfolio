import React from "react";
import {Switch, Route } from "react-router-dom";

import Landing from "./Pages/LandingPage/landingpage";
import Contact from "./Pages/Contact/contact";
import AboutMe from "./Pages/AboutMe/aboutme";
import Projects from "./Pages/Projects/projects";
import Resume from "./Pages/Resume/resume";

const Main = () => {
  return(
    <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/aboutme" component={AboutMe} />
    <Route path="/contact" component={Contact} />
    <Route path="/projects" component={Projects} />
    <Route path="/resume" component={Resume} />
  </Switch>
  )
  }

export default Main;
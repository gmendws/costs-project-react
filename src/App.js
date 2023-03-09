import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Company from "./components/pages/Company";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import NewProject from "./components/pages/NewProject";
import Projects from "./components/pages/Projects";

import Container from "./components/layout/Container";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Container customClass="min-height">
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/company">
            <Company />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/newproject">
            <NewProject />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
        </Container>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

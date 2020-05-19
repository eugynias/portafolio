import React from 'react';
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Projects from './Components/Projects';
import Social from './Components/Social';
import Nav from "./Components/Nav";
import About from "./Components/About";
import Home from "./Components/Home";
import styled from 'styled-components';
import img from './img/fondo.jpg'

const Container = styled.div`
  background-image: url(${img});
  width: 100%;
  min-height: 100vh;
  `
function App() {

  return (
    <div>
      <BrowserRouter>
       <Container>
         <Nav />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/social" component={Social} />
                <Route exact path="/about" component={About} />
            </Switch>
       </Container>
       </BrowserRouter>
    </div>
  );
}

export default App;



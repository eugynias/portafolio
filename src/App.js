import React from 'react';
//import {BrowserRouter,Switch,Route} from "react-router-dom";
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
      
       <Container>
         <Nav />
            
                <Home />
                <About />
                <Projects />
                <Social />
            
       </Container>
      
    </div>
  );
}

export default App;



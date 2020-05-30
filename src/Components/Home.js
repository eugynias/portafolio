
import React from 'react';
import styled from 'styled-components';
import img from '../img/eugenia-najar.jpeg'

const Nom = styled.div`
  display: flex;
  flex-direction:column;
  align-items: end;
  margin: 0 auto;
 `
  const Name = styled.h1`
    font-weight:bold;
    font-size:70px;
    text-transform: uppercase;
    color: dark;
    line-height: 0.8;
    `
  const Front = styled.h3`
    font-family: 'Catamaran', sans-serif;
    font-size:20px;
    margin-top: 10px;
    color:darkmagenta;
    `
  const Todo= styled.div`
  min-height: 40rem;
  display: flex;
  justify-content: center;
  align-items:center;
 
  `
  const Foto= styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    justify-content:center;
    padding:5rem 5rem;
    `

  const Img = styled.img`
  width: inherit;
  `
  
  const Home=()=>{

    return(
        <div id="home">
            <Todo>
              <div className="col col-sm-4">
                <Foto>
                  <Img src={img} />
                  </Foto>
              </div>
                <div className="col col-sm-3">
                  <Nom>
                      <Name >Eugenia </Name>
                      <Name >Najar</Name>
                      <Front>Front-End Developer</Front>
                  </Nom>
                </div>
            </Todo>
        </div>
    )
  }

  export default Home;

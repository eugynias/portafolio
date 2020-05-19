
import React from 'react';
import styled from 'styled-components';
import img from '../img/eugenianajar.jpg'



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
    color: #8C52FF;
    line-height: 0.8;
    `
  const Front = styled.h3`
    font-family: 'Catamaran', sans-serif;
    font-size:20px;
    margin-top: 10px;
    `
  const Todo= styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  flex-wrap: wrap;
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
        <div>
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

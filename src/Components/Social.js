import React from 'react';
import {AiOutlineGoogle,
    AiFillGithub,
    AiFillLinkedin
} from "react-icons/ai";
import styled from 'styled-components';

const Todo= styled.div`
 line-height:-50em;
 `

const Social = styled.h1`
   display:flex;
   justify-content: center;
   margin-top:10px;
    `
const Contact= styled.div` 
    display:block;
    width: 100%;
    margin-top:20px;
    min-height: 6vh;
    display:flex;
    justify-content: space-around;
    font-size: 50px;
`  

const About=()=>{
    return(
        <Todo>
              <Social>Contact</Social>
                <Contact>
                <a className="d-block text-dark" href="https://google.com"><AiOutlineGoogle /></a>
                <a className="contacto text-dark" href="https://github.com/eugynias"><AiFillGithub /></a>
                <a className="contacto text-dark"href="https://www.linkedin.com/in/eugenianajar/"><AiFillLinkedin /></a>
                </Contact>
        </Todo>
        
    )
}
export default About;
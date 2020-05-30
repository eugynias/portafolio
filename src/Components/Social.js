import React from 'react';
import {AiOutlineGoogle,
    AiFillGithub,
    AiFillLinkedin
} from "react-icons/ai";
import styled from 'styled-components';

const Todo= styled.div`
    padding:5rem;
    background-color: #1E1E1E ;
    color:white;
 `

const Social = styled.h3`
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
    justify-content:center;
    font-size: 50px;
`  

const Redes=()=>{

    return(

        <Todo id="contac">
            <Social>Contacto</Social>
                <Contact>
               
                <a className="contacto text-dark p-2" href="https://github.com/eugynias"><AiFillGithub /></a>
                <a className="contacto text-dark p-2" href="https://www.linkedin.com/in/eugenianajar/"><AiFillLinkedin /></a>
                </Contact>
        </Todo>
        
    )
}
export default Redes;
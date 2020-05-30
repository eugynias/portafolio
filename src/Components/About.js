import React from 'react';
import img from '../img/eugenia-najar.jpeg'
import styled from 'styled-components';

const Bio = styled.div`
    font-style: italic;
    font-size:20px; 
    line-height:40px;
    width:70%;
    margin:0 auto;
    `

const Title = styled.h1`
    margin-bottom:1rem;
    `

const Todo =styled.h1`
   
`

const About=()=>{

    return(
    
        <div className="container-fluid" id="about" >

        <div className="d-flex justify-content-center align-items-center flex-column min-vh-100">
            
        
            <Title>Acerca de  Eugenia</Title>
    
            <Bio>
            Soy Front-End Developer egresada de Laboratoria, me considero una persona con excelentes 
            habilidades para el trabajo en equipo, proactiva y empática. Me gusta desarrollar productos
            que resuelvan problemas y ayuden a las personas a tener acceso a un mundo globalizado. 
            El desempeñarme durante 13 años como asesor/profesor en Nivel Media Superior y mi background 
            en Ingeniería en Telemática me permitió conocer la importancia de impulsar el desarrollo comunitario
            por medio de la tecnología.
            </Bio>
            </div>
        </div>
    
        
    )
}
export default About;
import React from 'react';
import styled from 'styled-components';

const Bio = styled.div`
    width: 100%;
    min-height: 10vh;
    display:flex;
   justify-content: center;
   font-style: italic;
   font-size:20px;
   margin-top:15px;

    `

const Title = styled.h1`
    display:flex;
    justify-content: center;
    `
const About=()=>{

    return(
    
        <div className="container-fluid ">
             <Title>About Eugenia</Title>
    
            <Bio>
                <p className="w-25 text-justify "> Developer Front-End con excelentes habilidades para el trabajo en equipo, proactiva,
                    con mas de 13 años como asesor/profesor en Nivel Media Superior .
                    Mi background es Ingenieria en Telematica 
                    lo cual me permitio por medio de mis alumnos la importancia de fusionar tecnologia
                    y desarrollo comunitario.
                </p>
            </Bio>
        
        </div>
    
        
    )
}
export default About;
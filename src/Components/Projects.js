import React from 'react';
//import {Link,withRouter} from "react-router-dom";
import { Card, CardDeck,Button, Image, Figure }  from 'react-bootstrap';
import labnotes from "../img/lab-notes.png";
import mdlinks from "../img/mdlinks4.png";
import movie from "../img/movie.png";
import styled from 'styled-components';

const FigureContainer= styled.div`
  width:150px;
  margin: 0 auto;
  padding-top:1rem;
  `

const ContainerCta= styled.div`
  display:flex;
  justify-content:space-around;
  `
  const Todo =styled.div`
  
  min-height:100vh;
  margin:0 auto;
  width: 85%;
  display:flex;
  align-items:center;
 
  `

const Projects=()=>{

  const projects = [
    {
      id: 1,
      title: "Movie Challenge",
      description: "Movie Challenge es un proyecto que se llevo acabo con un equipo de 4 personas de manera remota. La pregunta quien es el mejor Batman o Superman lleva al usuario a visualizar las mejores películas de cada uno así como acceder a un buscador de cualquier película en general",
      linkGithub:"https://github.com/eugynias/GDL004-movie-challenge",
      linkLiveDemo:"https://github.com/eugynias/GDL004-movie-challenge",
      img:"https://i.ibb.co/Gtr7K9z/movie.png",
    },

    {
      id: 2,
      title: "Lab Notes",
      description: "Los docentes en el transcurso de sus clases deben llevar un registro detallado de las actividades de cada uno de sus alumnos . Lab- notes pretende simplicar este proceso ya que permite crear, editar, eliminar y consultar notas en cualquier momento.",
      linkGithub:"https://github.com/eugynias/GDL004-lab-notes",
      linkLiveDemo:"https://github.com/eugynias/GDL004-movie-challenge",
      img:"https://i.ibb.co/4SzgpWf/lab-notes.png"
    },

    {
      id: 3,
      title: "MD-LINKS",
      description: "MD-LINKS es un Framework que lee y analiza archivos en formato Markdown para verificar los links que contiene y reportar estadísticas como .- Links validos (--validate), links inválidos y estadísticas en general (--stats)",
      linkGithub:"https://github.com/eugynias/GDL004-md-links",
      linkLiveDemo:"https://github.com/eugynias/GDL004-movie-challenge",
      img:"https://i.ibb.co/HT7rV4q/mdlinks.png"
    },
  ];
  
    return(
      <Todo id="projects">
        <CardDeck>
          {projects.map(project=>{
            return (
              <Card>
                <FigureContainer>
                    <Figure.Image
                    width={150} 
                    height={150}
                    alt="171x180"
                    fluid={false}
                    src={project.img} roundedCircle 
                  />
                </FigureContainer>
              <Card.Body>
                    <Card.Title>{project.title} </Card.Title>
                    <Card.Text>
                    {project.description}
                    </Card.Text>      
              </Card.Body>
              <Card.Footer> 
                <ContainerCta>
                  <Button variant="primary" href={project.linkGithub}>Repositorio</Button>
                  <Button variant="primary" href={project.linkLiveDemo}>Live Demo</Button>
                </ContainerCta>
              </Card.Footer>
            </Card>      

            )
          })}
              
        </CardDeck>
        </Todo>
        
    )
}
export default Projects;
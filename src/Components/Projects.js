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
      title: "JConf",
      description: "Pagina web para el evento JConf 2020 de la comunidad Java en Guadalajara.Proyecto freelance con un equipo de 6 personas, tecnologías utilizadas Vue, Typescript, Firebase, Docker, Spectre, Jest.",
      linkGithub:"https://github.com/sierisimo/jconf-web",
      linkLiveDemo:"http://jconfmex.org/",
      img:"https://i.ibb.co/pwsPxYP/jconf.png"
    },

    {
      id: 3,
      title: "Kilichips",
      description: "E-commerce para la marca Kilichips, snacks saludables son presencia en todo el país. Proyecto freelance con un equipo de 3 personas ,tecnologías utilizadas React , Ruby on Rails",
      linkGithub:"https://github.com/eugynias",
      linkLiveDemo:"https://github.com/eugynias",
      img:"https://i.ibb.co/KGJN7rf/kilichips.jpg"
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
                  <Button variant="primary" href={project.linkLiveDemo}>Web</Button>
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
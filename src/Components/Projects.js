import React from 'react';
//import {Link,withRouter} from "react-router-dom";
import { Card, CardDeck,Button}  from 'react-bootstrap';
import labnotes from "../img/lab-notes.png";
import mdlinks from "../img/mdlinks4.png";
import movie from "../img/movie.png";
import styled from 'styled-components';

const ImageLab= styled.img`
  object-fit: contain;
  width:92%;
  margin: 0 auto;
  `
const ImageMd= styled.img`
  object-fit: contain;
  width:93%;
  margin: 0 auto;
  `
  const ImageMovie= styled.img`
  object-fit: contain;
  width:90%;
  margin: 0 auto;
  `

const About=()=>{
    return(
        <div>
        <CardDeck>
  <Card>
    <ImageMovie variant="top" src={movie} />
    <Card.Body>
      <Card.Title>Movie Challenge</Card.Title>
      <Card.Text>
      Movie Challenge es un proyecto que se llevo acabo con un equipo de 4 personas de manera remota. La pregunta
       quien es el mejor Batman o Superman lleva al usuario a visualizar las mejores películas de cada uno así 
       como acceder a un buscador de cualquier película en general.
      </Card.Text>
      <Button variant="primary" href="https://github.com/eugynias/GDL004-movie-challenge">Repositorio</Button>
    </Card.Body>
  </Card>
  <Card>
    <ImageLab variant="top" src={labnotes} />
    <Card.Body>
      <Card.Title>Lab Notes</Card.Title>
      <Card.Text>
      Los docentes en el transcurso de sus clases deben llevar un registro detallado de las actividades 
      de cada uno de sus alumnos . Lab- notes pretende 
      simplicar este proceso ya que permite crear, editar, eliminar y consultar notas en cualquier momento.{' '}
      </Card.Text>
      <Button className="" variant="primary" href="https://github.com/eugynias/GDL004-lab-notes">Repositorio</Button>
    </Card.Body>
  </Card>
  <Card>
    <ImageMd variant="top" src={mdlinks} />
    <Card.Body>
      <Card.Title>Md Links</Card.Title>
      <Card.Text>
      MD-LINKS es un Framework que lee y analiza archivos en formato Markdown para verificar los links
       que contiene y reportar estadísticas como .- Links validos (--validate), links inválidos y estadísticas
        en general (--stats)
      </Card.Text>
      <Button variant="primary" href="https://github.com/eugynias/GDL004-lab-notes">Repositorio</Button>
    </Card.Body>
  </Card>
</CardDeck>
        </div>
        
    )
}
export default About;
import React from "react";
import { Link } from "react-scroll";
import img from '../img/najarLogo3.svg'
import styled from 'styled-components';


const Bar = styled.div`
    position: fixed ;
    background-color: #1E1E1E ;
    z-index:200;
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:10px;
    `
const Img = styled.img`
  
   width:10%;
   margin-left:2rem;
    
    `


const Nav=()=>{

    return (
        
        <div> 
                <Bar>
                    
                    <Img src={img} />
                
                    <ul className="nav pr-6">
                    <li className="nav-item"> 
                        <Link
                                activeClass="active"
                                to="home" 
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                                className="nav-link text-light"
                                >Inicio</Link>
                    </li> 
                    <li className="nav-item"> 
                        <Link
                                activeClass="active"
                                to="about" 
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                                className="nav-link text-light"
                                >Acerca de </Link>
                        </li>
                        <li className="nav-item"> 
                        <Link
                                activeClass="active"
                                to="projects" 
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                                className="nav-link text-light"
                                >Proyectos</Link>
                        </li>
                        <li className="nav-item"> 
                            <Link
                                activeClass="active"
                                to="contac" 
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                                className="nav-link text-light"
                                >Contacto</Link>
                        </li>
                    </ul>
                </Bar>
    </div>
                
    )

}

export default Nav;

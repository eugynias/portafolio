import React from "react";
import {Link,withRouter} from "react-router-dom";
import styled from 'styled-components';

const Enlaces= styled.div`
  width: 100%;
  height: 40%;
  font-family: 'Catamaran', sans-serif;
  color: #E4E4E4;
  font-size: 20px;
  `

const Nav=()=>{

    return (
        <div className="container">
            <Enlaces>
                    <ul className="nav justify-content-end">
                    <li className="nav-item">
                            <Link to="/" className="nav-link text-dark" href="#">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="about" className="nav-link text-dark" href="#">About me</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="projects" className="nav-link text-dark" href="#">Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="social" className="nav-link text-dark" href="#">Contact</Link>
                        </li>
                    </ul>
            </Enlaces>
        </div>
    )

}

export default Nav;
import React from "react";
import {Container } from "react-bootstrap";
import Galeria from "../components/Galeria";

const Home = () =>{
    return(
        <>
        <Container fluid>
            <Container className="my-2 text-center">
                <h1>Natural PIC</h1>
                <p> Puedes elegir tus fotos favoritas y guardarlas :) ❤️</p>
                <hr/>
            </Container>
            <Galeria/>
        </Container>
        </>
    )
}

export default Home;

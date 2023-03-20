import React from "react";
import {Container } from "react-bootstrap";
import Galeria from "../components/Galeria";

const Home = () =>{
    return(
        <>
        <Container className="mx-auto">
            <Container className="my-5 text-center">
                <h1>Bienvenido a Happy Cake :)</h1>
                <p> El lugar de los pasteles felices</p>
                <hr/>
            </Container>
            <Galeria/>
        </Container>
        </>
    )
}

export default Home;
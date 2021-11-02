// importamos axios para la lectura de la bdies-api
import axios from 'axios';
import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router';
import { Container, Row, Col, Button } from 'react-bootstrap';
// importamos componente de reuso 





export default function Libro(props) {
    const [list, setList] = useState([]);
    const location = useLocation();
    const idlibro = location.pathname.substr(6);
    const urlbase = "http://localhost:5000/libros/"
    const urllibro = urlbase + idlibro;

    useEffect(() => {
        axios({
            url: urllibro,
        })
            .then((response) => {
                setList(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [setList]);

    console.log(list.titulo);

    return (

        <>
            <h2>{list.titulo}</h2>
            <hr />

            <Container className="libro">
                <Row>
                    <Col sm={4} >
                        <img src={list.portada} />

                    </Col>
                    <Col sm={8}>
                        
                        <h3>{list.Autor}</h3>
                        <p>{list.nota}</p>
                        <br />
                        <p>Categoria:{list.categoria}</p>
                        <p>Subcategoria:{list.subcategoria}</p>
                        <br />
                        <a href={list.link}> <Button variant="secondary">Descargar</Button></a>

                    </Col>
                </Row>


            </Container>

        </>
    );
}
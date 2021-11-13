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
    const urlbase = "https://api.bdies.ga/libros/"
    const urllibro = urlbase + idlibro;
    const urlvisitas = "https://api.bdies.ga/update/";
    let visitas;

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

    if (list.visitas != null) {
        visitas = list.visitas + 1;
        const urlupdate  = urlvisitas + idlibro + "/" + visitas
        axios.post(urlupdate, {
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

    }


    return (

        <>
            <h2>{list.titulo}</h2>
            <hr />

            <Container className="libro">
                <Row>
                    <Col sm={4} >
                        <img src={list.portada} alt="portada" />

                    </Col>
                    <Col sm={8}>

                        <h3>{list.Autor}</h3>
                        <p>{list.nota}</p>
                        <br />
                        <p>Categoria:{list.categoria}</p>
                        <p>Subcategoria:{list.subcategoria}</p>
                        <br />
                        <p>Visitas:{list.visitas}</p>
                        <br />
                        <a href={list.link}> <Button variant="secondary">Descargar</Button></a>

                    </Col>
                </Row>


            </Container>

        </>
    );
}
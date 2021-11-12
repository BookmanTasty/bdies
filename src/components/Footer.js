// importamos controlador axios y controlador de estados de uso
import { useState, useEffect } from 'react';
import axios from 'axios';

import { Container, Row, Col } from "react-bootstrap";


const Footer = () => {
    const [list, setList] = useState([]);
    const urlbase = "http://localhost:5000/visitas/6186a62bf0058e3763961b80"
    let visitas;

    useEffect(() => {
        axios({
            url: urlbase,
        })
            .then((response) => {
                setList(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [setList]);

    visitas = list.visitas;

    return (
        <div className="flex">
            <Container className="footer">
                <Row>
                    <Col sm={3}><h3>Visitas Totales</h3>
                        <p>{visitas}</p>
                    </Col>
                    <Col sm={6}><h3>Con tecnologia de</h3>
                        <div className="marcas">
                            <img height="68px" src="https://nodejs.org/static/images/logos/nodejs-new-pantone-black.svg" alt="logo node" />
                            <img height="68px" src="https://cdn.worldvectorlogo.com/logos/react-2.svg" alt="logo react" />
                            <img height="68px" src="https://sass-lang.com/assets/img/styleguide/color-1c4aab2b.png" alt="logo sass" />
                            <img width="136px" src="https://axios-http.com/assets/logo.svg" alt="logo axios" />
                            <img width="136px" src="https://seeklogo.com/images/A/algolia-logo-5A343ED5E8-seeklogo.com.png" alt="logo algolia" />
                        </div>
                    </Col>
                    <Col sm={3}><h3>Licencia</h3>
                        <img src="https://www.gnu.org/graphics/gplv3-with-text-136x68.png" alt="logo gnu" /></Col>
                </Row>
                <Row>
                    <Col><p><span>2021 Biblioteca Digital IESJRE GNU General Public License     </span><a href="https://github.com/BookmanTasty/bdies">Ver este sitio en GitHub</a></p></Col>
                </Row>
            </Container>
        </div>

    )
}

export default Footer;
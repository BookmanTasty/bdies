import { Container, Row, Col } from "react-bootstrap";

//importamos imagenes
import comienzo from '../assets/images/comienzo.png';
import beta from '../assets/images/beta.png';
import daps from '../assets/images/internet-of-things.png';
import polygon from '../assets/images/polygon-matic-logo.png';
import token from '../assets/images/tokens.png'
import ico from '../assets/images/light-bulb.png'
export default function Roadmap() {


    return (

        <div className="fpaginas">
            <h2>Plan de programación del proyecto 2021 - 2022 </h2>
            <hr />
            <h4>Actualmente el proyecto se encuentra en una etapa temprana de desarrollo, se han definido metas a corto plazo para poder seguir creciendo, a través de esta prospección establecemos los objetivos próximos del proyecto. </h4>
            <div className="icos">
                <Container>
                    <Row>
                        <Col sm={6}><h4>Octubre 2021 </h4>
                            <h5>Inicio del desarrollo, investigación y selección de las tecnologías a incorporar. </h5>
                            <h5>Recopilación y permiso de uso de los primeros 49 libros para su libre acceso. </h5>
                        </Col>
                        <Col sm={6}><center><img src={comienzo} height="250vh" alt="comienzo" /></center></Col>
                    </Row>

                    <Row>
                        <Col sm={6}>
                            <div>
                                <center><img src={beta} height="250vh" alt="comienzo" /></center>
                            </div>
                        </Col>
                        <Col sm={6}><h4>Octubre 2021 </h4>
                            <h5>Primera beta del proyecto funcional. </h5>
                            <h5>Incorporación de los libros de texto gratuito. </h5>
                            <h5>Ampliación del grupo de trabajo para el proyecto. </h5>
                        </Col>

                    </Row>

                    <Row>
                        <Col sm={6}><h4>Diciembre 2021. </h4>
                            <h5>Integración de las funcionalidades de carga de trabajos.</h5>
                            <h5>Incorporación del sistema de sesiones en web3.</h5>
                        </Col>
                        <Col sm={6}><center><img src={daps} height="250vh" alt="comienzo" /></center></Col>
                    </Row>

                    <Row>
                        <Col sm={6}>
                            <div>
                                <center><img src={polygon} height="250vh" alt="comienzo" /></center>
                            </div>
                        </Col>
                        <Col sm={6}><h4> Enero 2022  </h4>
                            <h5>Integración inicial con la red polygon. </h5>
                            <h5>Desarrollo de los primeros NFT del sistema  </h5>
                        </Col>

                    </Row>

                    <Row>
                        <Col sm={6}><h4>Febrero 2022. </h4>
                            <h5>Programación del token BDDJRE.</h5>
                            <h5>Integración del token en la red polygon.</h5>
                        </Col>
                        <Col sm={6}><center><img src={token} height="250vh" alt="comienzo" /></center></Col>
                    </Row>

                    <Row>
                        <Col sm={6}>
                            <div>
                                <center><img src={ico} height="250vh" alt="comienzo" /></center>
                            </div>
                        </Col>
                        <Col sm={6}><h4> Marzo 2022  </h4>
                            <h5>Oferta de Tokens inicial </h5>

                        </Col>

                    </Row>


                </Container>

            </div>


        </div>


    );
}
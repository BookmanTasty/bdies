import { Container, Row, Col } from 'react-bootstrap';
import blockchain from '../assets/images/blockchain.png';
import freedom from '../assets/images/freedom.png';
import place from '../assets/images/place.png';

const Caracteristicas = () => {
    return (
        <div className="caracteristicas">
            <div>
                <h5 >Características</h5>
                <hr />
            </div>
            <div className="padder">
                <Container>
                    <Row>
                        <Col sm={4}>

                            <center> <img src={blockchain} height="200vh" alt="Blockchain" /></center>
                            <h5 style={{ textAlign: 'center' }} >Descentralizado</h5>
                            <h6 style={{ textAlign: 'center' }}>Acceso a libros y artículos desde cualquier parte del mundo, mediante las redes IPFS y Polygon.</h6>

                        </Col>
                        <Col sm={4}>

                            <center><img src={place} height="200vh" alt="Place" /></center>
                            <h5 style={{ textAlign: 'center' }}>Local</h5>
                            <h6 style={{ textAlign: 'center' }}>Centrada en las problemáticas locales de acceso al conocimiento.</h6>

                        </Col>
                        <Col sm={4}>

                            <center><img src={freedom} height="200vh" style={{ justifyContent: 'center' }} alt="Freedom" /></center>
                            <h5 style={{ textAlign: 'center' }}>Libre</h5>
                            <h6 style={{ textAlign: 'center' }}>Los usuarios tienen la libertad de ejecutar, copiar, distribuir, estudiar, modificar y mejorar el software de la Biblioteca.</h6>

                        </Col>
                    </Row>
                </Container>
            </div>
        </div >
    )
}

export default Caracteristicas;
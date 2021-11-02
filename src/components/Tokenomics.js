import { Container, Row, Col } from 'react-bootstrap';


const Tokenomics = () => {
    return (
        <div className="caracteristicas">
            <div>
                <h5 >Token BDDJRE</h5>
                <hr />
            </div>

            <Container>
                <Row>
                    <Col>
                        <h6>Cada transacción realizada con el token BDDJRE será gravada con una tarifa del %5.</h6>
                    </Col>
                </Row>
                <div className="padder2">
                    <Row>
                        <Col sm={4}>

                            <h5  >Caridad</h5>
                            <h6 > 1% Sera entregado para becas escolares.</h6>

                        </Col>
                        <Col sm={4}>

                            <h5 >Tokens limitados</h5>
                            <h6 >Solo existirán 21,000,000 BDDJRE.</h6>

                        </Col>
                        <Col sm={4}>

                            <h5 >Liquidez</h5>
                            <h6 >2% se utilizará para la compra automática de liquidez.</h6>

                        </Col>
                    </Row>
                    </div>
                    <div className="padder2">
                    <Row>
                        <Col sm={4}>

                            <h5  >Redistribución</h5>
                            <h6 > 1% para holders.</h6>

                        </Col>
                        <Col sm={4}>

                            <h5 >Emisión controlada</h5>
                            <h6 >Cada 210,000 bloques la emisión será divida a la mitad.</h6>

                        </Col>
                        <Col sm={4}>

                            <h5 >Quemado</h5>
                            <h6 >Será destruido el 1% de las transacciones.</h6>

                        </Col>
                    </Row>
                </div>
            </Container>

        </div >
    )
}

export default Tokenomics;
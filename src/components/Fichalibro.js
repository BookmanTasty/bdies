import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Fichalibro = (props) => {
    var base = "/leer/";
    var id = props.id;
    var concat = base + id;


    return (



        <Card
            className="flibro"
            bg={"dark"}
            style={{ width: '15rem' }}>
            <Card.Img variant="top" src={props.portada} />
            <Card.Body>
                <Card.Title>{props.titulo}</Card.Title>
                <Card.Text>
                    {props.autor}
                </Card.Text>
                <Card.Text>
                    Visitas: {props.visitas}
                </Card.Text>
            </Card.Body>

            <Card.Body>
                <Link to={concat} > <Button variant="secondary">Leer</Button>{' '}</Link>
                <Button variant="secondary">❤️</Button>{' '}
            </Card.Body>
        </Card>
    )
}

export default Fichalibro;
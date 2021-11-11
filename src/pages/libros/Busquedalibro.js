//importamos dependencias de algolia

import algoliasearch from 'algoliasearch/lite';
import {
    InstantSearch,
    InfiniteHits,
    SearchBox,
    Highlight,
} from 'react-instantsearch-dom';
import PropTypes from 'prop-types';
//importamos dependencias bootstrap
import { Card, Button } from 'react-bootstrap';
//importamos dependencias de react router
import { Link } from 'react-router-dom';


//api key para busqueda
const searchClient = algoliasearch(
    'SPJ9DKIRPE',
    '7d52bd981a805e81e6518d3b437aed17'
);



export default function Busquedalibro() {


    return (
        <div className="ais-InstantSearch">
            <h1>Buscar</h1>
            <InstantSearch indexName="dev_bdies" searchClient={searchClient}>
                <div className="panel-busqueda">
                    <SearchBox
                     translations={{
                        submitTitle: 'Buscar...',
                        resetTitle: 'Limpiar busqueda.',
                        placeholder: 'Buscar...',
                      }}/>
                    <InfiniteHits hitComponent={Hit} 
                     translations={{
                        loadPrevious: "Cargar anteriores",
                        loadMore: 'Cargar mas',
                      }}/>
                </div>
            </InstantSearch>
        </div>
    );

}

function Hit(props) {
    var base = "/leer/"
    var concat = base + props.hit._id;


    return (
        <Card
            className="flibro"
            bg={"dark"}
            style={{ width: '15rem' }}>
            <Card.Img variant="top" src={props.hit.portada} />
            <Card.Body>
                <Card.Title className="hit-titulo">
                    <Highlight attribute="titulo" hit={props.hit} />
                    {props.hit.titulo}
                </Card.Title>

                <Card.Text className="hit-Autor">
                    <Highlight attribute="Autor" hit={props.hit} />
                    {props.hit.Autor}
                </Card.Text>
            </Card.Body>

            <Card.Body>
                <Link to={concat} > <Button variant="secondary">Leer</Button>{' '}</Link>
                <Button variant="secondary">❤️</Button>{' '}
            </Card.Body>
        </Card>
    );
}

Hit.propTypes = {
    hit: PropTypes.object.isRequired,
};

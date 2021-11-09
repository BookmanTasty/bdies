//importamos dependencias de algolia

import algoliasearch from 'algoliasearch/lite';
import {
    InstantSearch,
    Hits,
    SearchBox,
    Pagination,
    Highlight,
    ClearRefinements,
    RefinementList,
    Configure,
} from 'react-instantsearch-dom';
import PropTypes from 'prop-types';

// importamos las vistas de ficha libro
import Fichalibro from '../../components/Fichalibro';

//api key para busqueda
const searchClient = algoliasearch(
    'SPJ9DKIRPE',
    '7d52bd981a805e81e6518d3b437aed17'
); 



export default function Busquedalibro() {


    return (
        <div className="ais-InstantSearch">
            <h1>Frase mamalona de busqueda</h1>
            <InstantSearch indexName="dev_bdies" searchClient={searchClient}>
                <div className="panel-busqueda">
                    <SearchBox />
                    <Hits hitComponent={Hit} />
                    <Pagination />
                </div>
            </InstantSearch>
        </div>
    );

}

function Hit(props) {
    return (
      <> <Fichalibro id={props.hit._id} portada={props.hit.portada} titulo={props.hit.titulo} autor={props.hit.Autor} visitas={props.hit.visitas}/> </>
    );
  }
  
  Hit.propTypes = {
    hit: PropTypes.object.isRequired,
  };
  
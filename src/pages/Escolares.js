import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Portadaescolar from './escolares/Portadaescolar';

const Escolares = () => {


    return (
        <div className="fpaginas">

            <h1>Libros Escolares</h1>
            <hr />
            <div className="busqueda">

                <h5 >Ordenar por:</h5>
                <h5 >  <Link to="/escolares/portada">Titulo</Link> </h5>
                <h5 > <Link to="/escolares/portada">Autor</Link> </h5>
                <h5 > | <Link to="/escolares/portada">Buscar</Link> </h5>
            </div>
            <Switch>
                <div>
                    <Route path="/escolares/portada" > <Portadaescolar /> </Route>

                    
                </div>
            </Switch>
        </div>
    )
}



export default Escolares;
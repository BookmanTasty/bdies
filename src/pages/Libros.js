import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Portada from './libros/Portada';
import Titulo from './libros/Titulo';
import Autor from './libros/Autor';

const Libros = () => {


    return (
        <div className="fpaginas">

            <h1>Libros</h1>
            <hr />
            <div className="busqueda">

                <h5 >Ordenar por:</h5>
                <h5 >  <Link to="/libros/titulo"> Titulo    </Link> </h5>
                <h5 > <Link to="/libros/autor"> Autor    </Link> </h5>
            </div>
            <Switch>
                <div>
                    <Route path="/libros/titulo" > <Titulo /> </Route>
                    <Route path="/libros/autor" > <Autor /> </Route>
                    <Route path="/libros/portada" > <Portada /> </Route>
                    
                </div>
            </Switch>
        </div>
    )
}



export default Libros;
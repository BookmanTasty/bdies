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
                <Link to="/libros/titulo"> <h5 >Titulo   </h5> </Link>
                <Link to="/libros/autor"> <h5>Autor   </h5> </Link>
                <Link to="/libros/categoria"> <h5>Categoria   </h5> </Link>
            </div>
            <Switch>
                <div>
                    <Route path="/libros/titulo" > <Titulo /> </Route>
                    <Route path="/libros/autor" > <Autor /> </Route>
                    <Route path="/libros/categoria" > <h1> ordenar por categoria</h1></Route>
                    <Route path="/libros/portada" > <Portada /> </Route>
                    
                </div>
            </Switch>
        </div>
    )
}



export default Libros;
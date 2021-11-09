import React from 'react';
import {  Switch, Link } from 'react-router-dom';


const Articulos = () => {


    return (
        <div className="fpaginas">

            <h1>Artículos</h1>
            <hr />
            <div className="busqueda">

                <h5 >Ordenar por:</h5>
                <h5 >  <Link to=""> Titulo    </Link> </h5>
                <h5 > <Link to=""> Autor    </Link> </h5>
            </div>
            <Switch>
                <div>
                   <p>Actualmente no contamos con textos académicos o artículos científicos, puedes aportar poniéndote en contacto con la biblioteca para así juntos hacer un mundo con más conocimiento.</p>
                    
                </div>
            </Switch>
        </div>
    )
}



export default Articulos;
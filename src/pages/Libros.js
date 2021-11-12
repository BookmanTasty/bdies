import React from 'react';
import { Route , Link } from 'react-router-dom';
import { AnimatedSwitch, spring } from 'react-router-transition';

import Portada from './libros/Portada';
import Titulo from './libros/Titulo';
import Autor from './libros/Autor';
import Busquedalibro from './libros/Busquedalibro';

function mapStyles(styles) {
    return {
        opacity: styles.opacity,
        transform: `scale(${styles.scale})`,
    };
}

function bounce(val) {
    return spring(val, {
        stiffness: 330,
        damping: 22,
    });
}

const bounceTransition = {

    atEnter: {
        opacity: 0,
        scale: 1.2,
    },

    atLeave: {
        opacity: bounce(0),
        scale: bounce(0.95),
    },

    atActive: {
        opacity: bounce(1),
        scale: bounce(1),
    },
};

const Libros = () => {


    return (
        <div className="fpaginas">

            <h1>Libros</h1>
            <hr />
            <div className="busqueda">

                <h5 >Ordenar por:</h5>
                <h5 >  <Link to="/libros/titulo">Titulo</Link> </h5>
                <h5 > <Link to="/libros/autor">Autor</Link> </h5>
                <h5 > | <Link to="/libros/busqueda">Buscar</Link> </h5>
            </div>
            <AnimatedSwitch
                atEnter={bounceTransition.atEnter}
                atLeave={bounceTransition.atLeave}
                atActive={bounceTransition.atActive}
                mapStyles={mapStyles}
                className="switch-wrapper"
            >
                <Route path="/libros/titulo" > <Titulo /> </Route>
                <Route path="/libros/autor" > <Autor /> </Route>
                <Route path="/libros/portada" > <Portada /> </Route>
                <Route path="/libros/busqueda" > <Busquedalibro /> </Route>
            </AnimatedSwitch>
        </div>
    )
}



export default Libros;
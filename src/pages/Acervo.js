import React from 'react';
import {  Switch, Link } from 'react-router-dom';


const Acervo = () => {


    return (
        <div className="fpaginas">

            <h1>Acervo</h1>
            <hr />
            <div className="busqueda">

                <h5 >Ordenar por:</h5>
                <h5 >  <Link to=""> Titulo    </Link> </h5>
                <h5 > <Link to=""> Autor    </Link> </h5>
            </div>
            <Switch>
                <div>
                   <p>Actualmente no contamos con textos académicos, proyectos o tesis pertenecientes a los alumnos y docentes, para aportar contenido en esta área comunícate con tu asesor de carrera.</p>
                    
                </div>
            </Switch>
        </div>
    )
}



export default Acervo;
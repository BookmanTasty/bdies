import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Portada from './libros/Portada';
import Libro from '../components/Libro';

const Leer = () => {


    return (
        <div className="fpaginas">

           
            <Switch>
                <div>
                    
                    <Route path="/leer/:id"> <Libro/> </Route>
                    
                </div>
            </Switch>
        </div>
    )
}



export default Leer;
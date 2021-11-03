import React from 'react';
import {  Route, Switch } from 'react-router-dom';
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
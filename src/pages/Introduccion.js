// importamos controlador axios y controlador de estados de uso
import { useState, useEffect } from 'react';
import axios from 'axios';
// importamos componentes
import Hero from '../components/Hero';
import Caracteristicas from '../components/Caracteristicas'
import Tokenomics from '../components/Tokenomics'



export default  function Introduccion() {
    const [list, setList] = useState([]);
    const urlbase = "http://localhost:5000/visitas/6186a62bf0058e3763961b80"
    let visitas;

    useEffect(() => {
        axios({
            url: urlbase,
        })
            .then((response) => {
                setList(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [setList]);

    if (list.visitas != null) {
        visitas = list.visitas + 1;
        const urlupdate  = urlbase + "/" + visitas
        axios.post(urlupdate, {
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

    }

    
    return(
        <div className="fpaginas">
            <Hero />
            
            <Caracteristicas />
            <Tokenomics />
       
            
        </div>
    )
}


// importamos axios para la lectura de la bdies-api
import axios from 'axios';
import React, { useState, useEffect } from "react";
import _ from 'underscore';

// importamos componente de reuso 
import Fichalibro from "../../components/Fichalibro";




export default function Portada() {
  const [list, setList] = useState([]);
  useEffect(() => {
    axios({
      url: "http://localhost:5000/libros",
    })
      .then((response) => {
        setList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setList]);


  // ordenamos la lista por visitas y favoritos para poder representarla
  const visitas = _.sortBy(list, "visitas").reverse();
  const favoritos = _.sortBy(list, "favoritos").reverse();

  return (

    <div>
      <hr />
      <h3> Mas leidos </h3>
      <div className="flexlibros">

        {visitas.slice(0, 3).map((item) => (
          <><Fichalibro id={item._id} portada={item.portada} titulo={item.titulo} autor={item.Autor} visitas={item.visitas} /></>
        ))}

      </div>
      <h3>Favoritos</h3>
      <div className="flexlibros">

        {favoritos.slice(0, 3).map((item) => (
          <><Fichalibro id={item._id} portada={item.portada} titulo={item.titulo} autor={item.Autor} visitas={item.visitas}/></>
        ))}

      </div>
      <h3>Nuevos</h3>
      <div className="flexlibros">

        {list.slice(0, 3).map((item) => (
          <><Fichalibro id={item._id} portada={item.portada} titulo={item.titulo} autor={item.Autor} visitas={item.visitas} /></>
        ))}

      </div>
    </div>


  );
}

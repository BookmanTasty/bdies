// importamos axios para la lectura de la bdies-api
import axios from 'axios';
import React, { useState, useEffect } from "react";
// importamos componente de reuso 
import Fichalibro from "../../components/Fichalibro";
import getLibros from '../../api/getLibros';



export default function Portada() {
  const [list, setList] = useState([]);
  const [count, setCount] = useState("no hay estado");
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

  return (

    <div>
      <h3> Mas leidos </h3>
      <div className="flexlibros">

        {list.slice(0, 3).map((item) => (
          <><Fichalibro id={item._id} portada={item.portada} titulo={item.titulo} autor={item.Autor} /></>
        ))}

      </div>
      <h3>Favoritos</h3>
      <div className="flexlibros">

        {list.slice(0, 3).map((item) => (
          <><Fichalibro id={item._id} portada={item.portada} titulo={item.titulo} autor={item.Autor} /></>
        ))}

      </div>
      <h3>Nuevos</h3>
      <div className="flexlibros">

        {list.slice(0, 3).map((item) => (
          <><Fichalibro id={item._id} portada={item.portada} titulo={item.titulo} autor={item.Autor} /></>
        ))}

      </div>
    </div>


  );
}

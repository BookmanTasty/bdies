  // importamos axios para la lectura de la bdies-api
  import axios from 'axios';
  import React, { useState, useEffect } from "react";
  import _ from 'underscore';
  // importamos componente de reuso 
  import Fichalibro from "../../components/Fichalibro";



  export default function Titulo() {
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

    const ordenado = _.sortBy(list, "Autor");

    return (

      <div>
        <h3>A</h3>
        <div className="flexlibros">

          {ordenado.map((item) => {

            if (item.Autor.charAt(0) === 'A') {
              return <><Fichalibro id={item._id} portada={item.portada} titulo={item.titulo} autor={item.Autor} /></>
            }
            return null

          })}

        </div>

        <h3>B </h3>
        <div className="flexlibros">

          {ordenado.map((item) => {
            if (item.Autor.charAt(0) === 'B') {
              return <><Fichalibro id={item._id} portada={item.portada} titulo={item.titulo} autor={item.Autor} /></>
            }
            return null

          })}
        </div>

        <h3>C </h3>
        <div className="flexlibros">

          {ordenado.map((item) => {
            if (item.Autor.charAt(0) === 'C') {
              return <><Fichalibro id={item._id} portada={item.portada} titulo={item.titulo} autor={item.Autor} /></>
            }
            return null

          })}

        </div>

        <h3>D </h3>
        <div className="flexlibros">

          {ordenado.map((item) => {
            if (item.Autor.charAt(0) === 'D') {
              return <><Fichalibro id={item._id} portada={item.portada} titulo={item.titulo} autor={item.Autor} /></>
            }
            return null

          })}

        </div>

        <h3>E </h3>
        <div className="flexlibros">

          {ordenado.map((item) => {
            if (item.Autor.charAt(0) === 'E') {
              return <><Fichalibro id={item._id} portada={item.portada} titulo={item.titulo} autor={item.Autor} /></>
            }
            return null

          })}

        </div>

        <h3>F </h3>
        <div className="flexlibros">

          {ordenado.map((item) => {
            if (item.Autor.charAt(0) === 'F') {
              return <><Fichalibro id={item._id} portada={item.portada} titulo={item.titulo} autor={item.Autor} /></>
            }
            return null

          })}

        </div>

        <h3>G </h3>
        <div className="flexlibros">

          {ordenado.map((item) => {
            if (item.Autor.charAt(0) === 'G') {
              return <><Fichalibro id={item._id} portada={item.portada} titulo={item.titulo} autor={item.Autor} /></>
            }
            return null

          })}

        </div>

        <h3>H </h3>
        <div className="flexlibros">

          {ordenado.map((item) => {
            if (item.Autor.charAt(0) === 'H') {
              return <><Fichalibro id={item._id} portada={item.portada} titulo={item.titulo} autor={item.Autor} /></>
            }
            return null

          })}

        </div>

        <h3>I </h3>
        <div className="flexlibros">

          {ordenado.map((item) => {
            if (item.Autor.charAt(0) === 'I') {
              return <><Fichalibro id={item._id} portada={item.portada} titulo={item.titulo} autor={item.Autor} /></>
            }
            return null

          })}

        </div>

        <h3>J </h3>
        <div className="flexlibros">

          {ordenado.map((item) => {
            if (item.Autor.charAt(0) === 'J') {
              return <><Fichalibro id={item._id} portada={item.portada} titulo={item.titulo} autor={item.Autor} /></>
            }
            return null

          })}

        </div>

        <h3>K </h3>
        <div className="flexlibros">

          {ordenado.map((item) => {
            if (item.Autor.charAt(0) === 'K') {
              return <><Fichalibro id={item._id} portada={item.portada} titulo={item.titulo} autor={item.Autor} /></>
            }
            return null

          })}

        </div>

        <h3>L </h3>
        <div className="flexlibros">

          {ordenado.map((item) => {
            if (item.Autor.charAt(0) === 'L') {
              return <><Fichalibro id={item._id} portada={item.portada} titulo={item.titulo} autor={item.Autor} /></>
            }
            return null

          })}

        </div>

        <h3>M </h3>
        <div className="flexlibros">

          {ordenado.map((item) => {
            if (item.Autor.charAt(0) === 'M') {
              return <><Fichalibro id={item._id} portada={item.portada} titulo={item.titulo} autor={item.Autor} /></>
            }
            return null

          })}

        </div>

        <h3>N </h3>
        <div className="flexlibros">

          {ordenado.map((item) => {
            if (item.Autor.charAt(0) === 'N') {
              return <><Fichalibro id={item._id} portada={item.portada} titulo={item.titulo} autor={item.Autor} /></>
            }
            return null

          })}

        </div>

        <h3>O </h3>
        <div className="flexlibros">

          {ordenado.map((item) => {
            if (item.Autor.charAt(0) === 'O') {
              return <><Fichalibro id={item._id} portada={item.portada} titulo={item.titulo} autor={item.Autor} /></>
            }
            return null

          })}

        </div>

        <h3>P </h3>
        <div className="flexlibros">

          {ordenado.map((item) => {
            if (item.Autor.charAt(0) === 'Q') {
              return <><Fichalibro id={item._id} portada={item.portada} titulo={item.titulo} autor={item.Autor} /></>
            }
            return null

          })}

        </div>

        <h3>R </h3>
        <div className="flexlibros">

          {ordenado.map((item) => {
            if (item.Autor.charAt(0) === 'R') {
              return <><Fichalibro id={item._id} portada={item.portada} titulo={item.titulo} autor={item.Autor} /></>
            }
            return null

          })}

        </div>

        <h3>S </h3>
        <div className="flexlibros">

          {ordenado.map((item) => {
            if (item.Autor.charAt(0) === 'S') {
              return <><Fichalibro id={item._id} portada={item.portada} titulo={item.titulo} autor={item.Autor} /></>
            }
            return null

          })}

        </div>

        <h3>T </h3>
        <div className="flexlibros">

          {ordenado.map((item) => {
            if (item.Autor.charAt(0) === 'T') {
              return <><Fichalibro id={item._id} portada={item.portada} titulo={item.titulo} autor={item.Autor} /></>
            }
            return null

          })}

        </div>

        <h3>U </h3>
        <div className="flexlibros">

          {ordenado.map((item) => {
            if (item.Autor.charAt(0) === 'U') {
              return <><Fichalibro id={item._id} portada={item.portada} titulo={item.titulo} autor={item.Autor} /></>
            }
            return null

          })}

        </div>

        <h3>V </h3>
        <div className="flexlibros">

          {ordenado.map((item) => {
            if (item.Autor.charAt(0) === 'V') {
              return <><Fichalibro id={item._id} portada={item.portada} titulo={item.titulo} autor={item.Autor} /></>
            }
            return null

          })}

        </div>

        <h3>W </h3>
        <div className="flexlibros">

          {ordenado.map((item) => {
            if (item.Autor.charAt(0) === 'W') {
              return <><Fichalibro id={item._id} portada={item.portada} titulo={item.titulo} autor={item.Autor} /></>
            }
            return null

          })}

        </div>

        <h3>X </h3>
        <div className="flexlibros">

          {ordenado.map((item) => {
            if (item.Autor.charAt(0) === 'X') {
              return <><Fichalibro id={item._id} portada={item.portada} titulo={item.titulo} autor={item.Autor} /></>
            }
            return null

          })}

        </div>

        <h3>Y </h3>
        <div className="flexlibros">

          {ordenado.map((item) => {
            if (item.Autor.charAt(0) === 'Y') {
              return <><Fichalibro id={item._id} portada={item.portada} titulo={item.titulo} autor={item.Autor} /></>
            }
            return null

          })}

        </div>

        <h3>Z </h3>
        <div className="flexlibros">

          {ordenado.map((item) => {
            if (item.Autor.charAt(0) === 'Z') {
              return <><Fichalibro id={item._id} portada={item.portada} titulo={item.titulo} autor={item.Autor} /></>
            }
            return null

          })}

        </div>

      </div>

      


    );
  }
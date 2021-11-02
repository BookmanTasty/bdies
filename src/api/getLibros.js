import axios from "axios";

const getLibros = async () => {
  const result = await axios("http://localhost:5000/libros/");
  // return the result
  return result;
};

export default getLibros;

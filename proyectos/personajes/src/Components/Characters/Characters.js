// componente de logica ( peticion http + map )
// React first
import { useState, useEffect } from "react";
import { useFetch } from "./../../hooks/useFetch";
import { Row } from "react-bootstrap";

/*Spinner */
import Loading from "./../Loading";
/*Componente de presentacion */
import Character from "./Character";
import Paginate from "./../Paginate";

const BASE_ENDPOINT = "character";

/*Custom hooks  */
const Characters = ({ search }) => {
  const [url, setUrl] = useState(BASE_ENDPOINT);

  useEffect(() => {
    console.log("Busca", search);
    // BASE_URL/character?name=search
    const newUrl = !search ? BASE_ENDPOINT : `${BASE_ENDPOINT}?name=${search}`;
    setUrl(newUrl);
  }, [search]);

  const [data, fetching] = useFetch(url); // Hook personalizado
  // fltro con el back --> la api retorna 20 caracteres y en total son 670
  const { info, results: characters } = data;

  const handlePages = (newUrl) => {
    // page=2
    setUrl(`${BASE_ENDPOINT}?${newUrl}`);
  };

  return (
    <>
      <Row>
        {fetching ? (
          <Loading />
        ) : (
          characters.map((character) => (
            <Character key={character.id} {...character} />
          ))
        )}
      </Row>
      <Paginate {...info} handlePages={handlePages} />
    </>
  );
};

export default Characters;

/**
const [characters, setChatacters] = useState([]);
const [fetching, setFeching] = useState(true);
const [error, setError] = useState(false);

const getCharacters = async (endpoint) => {
  try {
    const result = await fetch(`${BASE_URL}/${endpoint}`);
    const data = await result.json();
    console.log(data);
    setChatacters(data.results); // array de personajes
    // false cuando termina la peticion
    setFeching(false);
  } catch (e) {
    // configuro estado si hubo error
    setError(true);
    setFeching(false);
    setChatacters([]);
  }
};

useEffect(() => {
  console.log("traer los personajes");
  getCharacters("character");
}, []);
*/

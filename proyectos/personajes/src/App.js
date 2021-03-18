import { useState, useEffect } from "react";
import Characters from "./Components/Characters";
import { Container } from "react-bootstrap";

//Estatales vs funciones (estado y ciclos de vida)
// Custom Hooks
import Search from "./Components/Search";

function App() {
  const [search, setSearch] = useState(null);

  const handlerSearch = (value) => {
    setSearch(value);
  };

  return (
    <Container>
      <Search handlerSearch={handlerSearch} />

      <Characters search={search} />
    </Container>
  );
}

export default App;

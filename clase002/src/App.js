import { Container } from "react-bootstrap";
import Header from "./Components/Header";
import Counter from "./Components/Counter";
import Register from "./Components/Register";

function App() {
  return (
    <Container>
      {/* props: Forma que tiene la libreria de pasar elementos a un componente child */}
      <Header title="Titulo de Prueba" likes={4} />
      <Counter />
      <Register />
    </Container>
  );
}

export default App;

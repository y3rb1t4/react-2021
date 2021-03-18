import { useState } from "react"; //hook es una funcion
//useState es una funcion que controla el estado
import { Row, Col, Button } from "react-bootstrap";

//onclick -> evento javascript
//onClick -> evento react (eventos sinteticos)

const Counter = () => {
  //No existen mutuaciones

  // Estado -> Objeto -> brindar indormacion global al componente
  const [counter, setCounter] = useState(0); // const [counter ] = useState(0)

  //implica -> react pasa la referencia del disipador del evento
  const add = () => {
    console.log("suma");
    setCounter(counter + 1); // previus State
  };
  const substract = () => {
    console.log("resta");
    setCounter(counter - 1);
  };

  return (
    <>
      <Row>
        <h3>Mi contador Bonito =) </h3>
      </Row>
      <Row>
        <Col>
          <h4>Contador: {counter} </h4>

          <Button className="mr-2" variant={"primary"} onClick={add}>
            +1
          </Button>

          <Button variant={"primary"} onClick={substract}>
            -1
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default Counter;

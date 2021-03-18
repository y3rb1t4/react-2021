import Header from "./Components/Header";
import Footer from "./Components/Footer/";
import List from "./Components/List";
import {Container, Row ,Col } from "react-bootstrap";

const App = () => {
  return (
    <Container fluid>
        <Header />
        <Row>
          <Col md={8}>
            <List />
          </Col>
          <Col md={4}>
            <h3>Input</h3>
          </Col>
        </Row>
        <Footer />
    </Container>
  );
};

export default App;

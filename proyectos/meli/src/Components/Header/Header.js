import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Header = React.memo(({ handlerSearch }) => {
  const history = useHistory();

  const search = (e) => {
    e.preventDefault();
    const [{ value }] = e.target;
    const trimValue = value.trim();
    if (trimValue) {
      handlerSearch(trimValue);
      history.push(`/products?seach=${trimValue}`);
    }
  };
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <Form onSubmit={search}>
            <Form.Group>
              <Form.Control type="text" placeholder="Encontra lo que buscas" />
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
});

export default Header;

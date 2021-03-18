import React from "react";
import { Row, Col } from "react-bootstrap";

const Header = React.memo(({ title }) => {
  console.log("%c Hola desde el Header", "background:tomato");
  return (
    <>
      <Row>
        <Col>
          <h1 className="text-center">{title}</h1>
        </Col>
      </Row>
    </>
  );
});

export default Header;

import { Row, Col, Pagination } from "react-bootstrap";

const Paginate = ({ next, prev, handlePages }) => {
  const handlelerNext = () => {
    console.log("tocamos next");
    const [, query] = next.split("?");
    console.log(query);
    handlePages(query);
  };

  const handlerPrev = (params) => {
    const [, query] = prev.split("?");
    handlePages(query);
  };

  return (
    <Row>
      <Col>
        <Pagination>
          {/* Evaluo si prev es true para mostrar el elemento previo */}
          {!!prev && <Pagination.Prev onClick={handlerPrev} />}
          <Pagination.Next onClick={handlelerNext} />
        </Pagination>
      </Col>
    </Row>
  );
};

export default Paginate;

import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useReducer } from "react";
import { userReducer, initialState } from "./../reducers/user";
import { SET_USER } from "./../reducers/actions/user";
import Seo from "./../Components/Seo";
const Login = () => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const handlerSubmit = (e) => {
    e.preventDefault();
    const [user, password] = e.target; // e.target[0].value
    dispatch({
      type: SET_USER,
      payload: { user: user.value, password: password.value },
    });
  };

  return (
    <>
      <Seo title="Login" description="El login del sitio" />
      <Container>
        <Row>
          <Col>
            <Form onSubmit={handlerSubmit}>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="usuario"
                  name="usuario"
                />
              </Form.Group>

              <Form.Group>
                <Form.Control
                  type="password"
                  placeholder="********"
                  name="password"
                />
              </Form.Group>
              <Button type="submit">Logueate Wuachin</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;

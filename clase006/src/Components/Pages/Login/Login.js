import { useForm } from "react-hook-form";
import { Row, Col, Form, Button } from "react-bootstrap";
import { schema } from "./schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { usePost } from "./../../../hooks/userHTTP";

const Login = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const [post, dataResponse, fetching] = usePost();

  const submitForm = (data) => {
    console.log(data);
    post("user", data);
  };
  return (
    <>
      <Row>
        <Col md={6}>
          <Form onSubmit={handleSubmit(submitForm)}>
            <Form.Group>
              <Form.Control
                name="email"
                ref={register}
                placeholder="Enter mail"
              />
              {errors.email && (
                <span className="text-danger">{errors.email.message}</span>
              )}
            </Form.Group>
            <Form.Group>
              <Form.Control
                ref={register}
                name="password"
                placeholder="********"
              />
              {errors.password && (
                <span className="text-danger">{errors.password.message}</span>
              )}
            </Form.Group>

            <Button type="submit">Ingresar</Button>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default Login;

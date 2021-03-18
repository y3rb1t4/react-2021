import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import shorid from "shortid";

const Create = ({ addActivity }) => {
  const initialState = {
    id: "",
    work: "",
    state: false,
  };
  const handleWork = (e) => {
    const { name, value } = e.target;
    setWork({
      ...work,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // verificar que la tarea tenga algo
    // formik , yup
    const { work: task } = work;
    if (task.trim() === "") return;
    const workObject = {
      ...work, // {id:"",work:"tarea", state:"false"}
      id: shorid(),
    };
    console.log(workObject);
    setWork(initialState);
    addActivity(workObject);
  };

  const [work, setWork] = useState(initialState);
  return (
    <>
      <h4>Crear Tarea</h4>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Control
            type="text"
            name="work"
            value={work.work}
            onChange={handleWork}
          />
        </Form.Group>
        <Button variant="primary" type="submit" block>
          Agregar Tarea
        </Button>
      </Form>
    </>
  );
};

export default Create;

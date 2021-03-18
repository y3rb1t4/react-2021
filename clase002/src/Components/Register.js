import { useState } from "react";

const Register = () => {
  //caso1- solo guardo el nombre del usuario
  //caso2- guardo el nombre y el correo del usuario

  /*
    const input = useState(""); //return [state,setState]
    const name = input[0];
    const setName =  input[1];
    El setter es una funcion que cambia el valor del estado
    */
  const initialState = {
    name: "",
    mail: "",
  };

  const handleInput = (e) => {
    console.log(e.target);
    console.log(e.target.name);
    console.log(e.target.value);
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleReset = () => {
    setUser(initialState);
  };

  /*
  const handleInputName = (e) => {
    setUser({ ...user, name: e.target.value });
  };
  const handleInputMail = (e) => {
    setUser({ ...user, mail: e.target.value });
  };
*/
  const [user, setUser] = useState(initialState); // para funcionar necesita la condicion inicial del estado
  // user -> {name, mail}

  return (
    <>
      <h3>Registro</h3>
      <input
        type="text"
        name="name"
        placeholder="nombre"
        onChange={handleInput}
        value={user.name}
      />
      <input
        type="text"
        placeholder="correo@example.com"
        name="mail"
        onChange={handleInput}
        value={user.mail}
      />
      <h4>
        {user.name} {user.mail}{" "}
      </h4>
      <button type="button" onClick={handleReset}>
        Limpiar
      </button>
    </>
  );
};

export default Register;

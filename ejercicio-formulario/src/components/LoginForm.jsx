import { useState } from "react";
import { validatePassword, validateUserName } from "../utils/validateInputs";

const LoginForm = () => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onChangeUserName = (e) => setUsername(e.target.value);
  const onChangePassword = (e) => setPassword(e.target.value);

  const onSubmitForm = (e) => {
    e.preventDefault();

    const isValidUserName = validateUserName(userName);

    const isValidPassword = validatePassword(password);

    if (!isValidPassword || !isValidUserName) {
      alert("Alguno de los datos no son validos");
    } else {
      alert(`Bienvenid@ ${userName}`);
    }
  };
  return (
    <div className="App">
      <form onSubmit={onSubmitForm}>
        <input
          onChange={onChangeUserName}
          type="text"
          name="username"
          placeholder="Ingrese su nombre de usuario"
          value={userName}
        />
        <input
          onChange={onChangePassword}
          type="password"
          name="password"
          placeholder="Ingrese su contraseña"
          value={password}
          id=""
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

LoginForm.propTypes = {};

export default LoginForm;

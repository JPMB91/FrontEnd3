import { useState } from "react";

export const Checkbox = () => {
  const [like, setLike] = useState(false);
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");

  const checkboxHandler = () => {
    setLike(!like);
    
    setMessage("");
  };

  const handleSumbmit = (e) => {
    
    e.preventDefault();
    setText("");
    const textoTrim = text.trim();
    if (textoTrim.length > 1 && like) {
      setMessage(textoTrim);
    } else if (!like) {
      setMessage("Que lastima :(");
    } else if (like && textoTrim.length < 1) {
      setMessage("la pregunta es obligatoria");
    }
   
  };

  const handleInput = (e) => {
    setText(e.target.value);
    console.log(e.target.value);
  };

  return (
    <>
    <h1>Pregunta sobre programación</h1>
      <form>
        <label htmlFor="check">¿Te gustan los lenguajes de programación?</label>
        <input type="checkbox" onChange={checkboxHandler} name="check" id="" />

        {like && (
          <>
            <label htmlFor="lenguajes">Cuales</label>
            <input type="text" onChange={handleInput} name="lenguajes" />
          </>
        )}
        <button type="submit" onClick={handleSumbmit}>
          Enviar respuesta
        </button>
      </form>
      {message && <p>{message}</p>}
    </>
  );
};

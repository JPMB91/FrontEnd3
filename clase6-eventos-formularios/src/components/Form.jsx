import { useState } from "react";
import {
  validateAge,
  validateName,
  validatePokemon,
} from "../utils/validateInputs";
import { SuccessMessage } from "./SuccessMessage";
import { formulario, errorMessage } from "../styles/Form.module.css";
// import {errorMessage} from "../styles/Form.module.css"

export const Form = () => {
  const [formData, setFormData] = useState({
    nombreCompleto: "",
    edad: "",
    pokemon: "",
  });
  const [error, setErrors] = useState({
    nombreCompleto: "",
    edad: "",
    pokemon: "",
  });
  const [showForm, setShowForm] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValidName = validateName(formData.nombreCompleto);
    const isValidAge = validateAge(formData.edad);
    const isValidPokemon = validatePokemon(formData.pokemon);

    if (isValidAge && isValidName && isValidPokemon) {
      setShowForm(false);
      setErrors(false);
    } else {
      setErrors(true);

      const errorsFound = {
        nombreCompleto: isValidName
          ? ""
          : "Debes ingresar un nombre completo que contenga al menos 10 caracteres",
        edad: isValidAge
          ? ""
          : "Debes ingresar un número válido y tener al menos 16 años para registrarte",
        pokemon: isValidPokemon
          ? ""
          : "El nombre del pokemon debe tener al menos 5 caracteres y no poseer números",
      };

      setErrors(errorsFound);

      // Limpio los campos
      setFormData((data) => ({
        nombreCompleto: isValidName ? data.nombreCompleto : "",
        edad: isValidAge ? data.edad : "",
        pokemon: isValidPokemon ? data.pokemon : "",
      }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((data) => ({
      ...data,
      [name]: name == "edad" ? Number(value) : value,
    }));
  };

  return (
    <>
      <h1>Centro Pokemon</h1>
      {showForm ? (
        <form className={formulario}>
          <label htmlFor="nombreCompleto">Nombre Completo:</label>
          <input
            type="text"
            name="nombreCompleto"
            placeholder="Ingrese nombre completo"
            value={formData.nombreCompleto}
            onChange={handleChange}
            required
          />
          {error.nombreCompleto && (
            <h5 className={errorMessage}>{error.nombreCompleto}</h5>
          )}
          <label htmlFor="edad">Edad:</label>
          <input
            type="number"
            name="edad"
            placeholder="Ingrese su edad"
            value={formData.edad}
            onChange={handleChange}
            required
          />

          {error.edad && <h5 className={errorMessage}>{error.edad}</h5>}
          <label htmlFor="pokemon">Pokemón Favorito:</label>
          <input
            type="text"
            name="pokemon"
            placeholder="Cuál es tu pokemón favorito"
            value={formData.pokemon}
            onChange={handleChange}
            required
          />
          {error.pokemon && <h5 className={errorMessage}>{error.pokemon}</h5>}
          <button onClick={handleSubmit} type="submit">
            Enviar
          </button>
        </form>
      ) : (
        <SuccessMessage
          nombre={formData.nombreCompleto}
          pokemon={formData.pokemon}
        />
      )}



    </>
  );
};

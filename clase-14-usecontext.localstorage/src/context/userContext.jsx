import { createContext, useEffect, useReducer } from "react";
import {
  getUserFromStorage,
  setUserInStorage,
} from "../utils/getUserInformation";
import PropTypes from "prop-types";

export const githubReducer = (state, action) => {
  // Validamos si el usuario es el mismo que ya tenemos almacenado
  const existingUser = state.username === action.payload.login;
  switch (action.type) {
    case "CHANGE USER":
      // Si es un usuario distinto, extraemos las propiedades
      // que deseamos almacenar y las guardamos en el estado

      if (!existingUser) {
        const { name, avatar_url, html_url, login } = action.payload;
        // Nuestro estado es un objeto con estas propiedades
        const newUser = { name, avatar_url, html_url, username: login };
        // En caso de que cambie el usuario seleccionado
        // actualizamos la información que se encuentre en
        // el storage

        setUserInStorage(newUser);
        return newUser;
      }
      return state;
    default:
      return state;
  }
};

//crear el contexto
export const UserContext = createContext();

//proveedor del contexto que permite compartirlo con los hijos
export const UserContextProvider = ({ children }) => {
  // Reemplazamos el useState por useReducer.
  // Pasamos un objeto vacío, ya que lo inicializamos en forma diferida
  // Pasamos la funcion para inicializar el estado en forma diferida
  const [user, dispatch] = useReducer(githubReducer, {}, getUserFromStorage);

  // En caso de que cambie el usuario seleccionado
  // actualizamos la información que se encuentre en
  // el storage
  useEffect(() => {
    setUserInStorage(user);
  }, [user]);

  // Nuestra función ahora dispara una acción del tipo CHANGE_USER
  const changeUser = (user) => dispatch({ type: "CHANGE_USER", payload: user });

  return (
    <UserContext.Provider value={{ user, changeUser }}>
      {children}
    </UserContext.Provider>
  );
};

UserContextProvider.propTypes = {
  children: PropTypes.object,
};

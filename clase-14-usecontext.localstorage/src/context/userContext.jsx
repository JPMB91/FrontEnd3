import { createContext, useEffect, useState } from "react";
import {
  getUserFromStorage,
  setUserInStorage,
} from "../utils/getUserInformation";
import PropTypes from "prop-types";

//crear el contexto
export const UserContext = createContext();

//proveedor del contexto que permite compartirlo con los hijos
export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(getUserFromStorage());

  // En caso de que cambie el usuario seleccionado
  // actualizamos la información que se encuentre en
  // el storage
  useEffect(() => {
    setUserInStorage(user);
  }, [user]);

  // Creamos una función para actualizar el usuario
  const changeUser = (user) => setUser(user);

  return (
    <UserContext.Provider value={{ user, changeUser }}>
      {children}
    </UserContext.Provider>
  );
};

UserContextProvider.propTypes = {
  children: PropTypes.object,
};

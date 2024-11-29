// Creamos una función para obtener los datos del storage
// y otra para almacenarlos
export const getUserFromStorage = () => {
  const localData = localStorage.getItem("user");
  return localData ? JSON.parse(localData) : [];
};

export const setUserInStorage = (user) =>
  localStorage.setItem("user", JSON.stringify(user));

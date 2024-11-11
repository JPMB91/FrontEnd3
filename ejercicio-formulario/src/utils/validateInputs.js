export const validateUserName = (userName) => {
  const trimmedUserName = userName.trim();
  if (trimmedUserName.length > 2) {
    return true;
  } else {
    return false;
  }
};

export const validatePassword = (password) => {
  const trimmedPassword = password.trim();

  // Separamos el string en un array para luego
  // recorrelo y validar si existe al menos un numero
  const passwordAsArray = trimmedPassword.split("");

  // Some nos retorna true si al menos una de las iteraciones es verdadera
  const hasNumber = passwordAsArray.some((c) => {
    if (isNaN(c)) {
      return false;
    } else {
      return true;
    }
  });

  if (trimmedPassword.length > 5 && hasNumber) {
    return true;
  } else {
    return false;
  }
};

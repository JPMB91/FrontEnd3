export const validateName = (nombreCompleto) => {
  nombreCompleto = nombreCompleto.trim();
  const isValidName = /[a-zA-Z]/.test(nombreCompleto)
  
  if (
    isValidName &&
    nombreCompleto.includes(" ") &&
    nombreCompleto.length > 10
  ) {
    return true;
  } else {
    return false;
  }
};

export const validateAge = (edad) => {
  const edadNum = Number(edad);
  return !isNaN(edadNum) && edadNum > 16;
};

export const validatePokemon = (pokemon) => {
  pokemon = pokemon.trim()
  const isValidPokemon = /[a-zA-Z]/.test(pokemon)
 

  if (pokemon.length > 5 && isValidPokemon) {
    return true;
  } else {
    return false;
  }
};

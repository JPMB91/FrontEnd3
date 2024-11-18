import axios from "axios";

export const getPokemon = async () => {
  const url = "https://pokeapi.co/api/v2/pokemon/1";

  try {
    const response = await axios(url);
    const { data } = response;

    if (response.status != 200) {
      throw new Error("Error al obtener pokemon");
    }
    console.log(response.status);
    const pokemon = {
      img: data.sprites.front_default,
      name: data.name,
    };
    console.log(pokemon);

    return pokemon;
  } catch (error) {
    console.log(error);
    return null;
  }
};

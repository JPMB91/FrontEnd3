import PropTypes from "prop-types";

export const SuccessMessage = ({ nombre, pokemon }) => {
  return (
    <h4
      style={{ color: "green" }}
    >{`Bienvenid@: ${nombre} tu ${pokemon} te espera`}</h4>
  );
};

SuccessMessage.propTypes = {
  nombre: PropTypes.string,
  pokemon: PropTypes.string,
};

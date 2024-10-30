import PropTypes from "prop-types";

const Saludo = ({ nombre, children }) => {
  return (
    <>
      <p>{children} {nombre}</p>
    </>
  );
};

Saludo.propTypes = {
  nombre: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Saludo;
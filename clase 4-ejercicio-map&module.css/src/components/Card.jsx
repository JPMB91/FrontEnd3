import PropTypes from "prop-types";
import {cardContainer} from '../styles/Card.module.css'

export const Card = ({ nombre, imagen, precio }) => {
  return (
    <li className={cardContainer}>
      <h2>{nombre}</h2>
      <img src={imagen} alt={nombre} />
      <h3>{precio}</h3>
    </li>
  );
};

Card.propTypes = {
  nombre: PropTypes.string,
  imagen: PropTypes.string,
  precio: PropTypes.string,
};

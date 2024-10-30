import PropTypes from "prop-types";
import { cardContainer } from "../styles/Card.module.css";
console.log(cardContainer);
// import CardStyles from "../styles/Card.module.css";
// console.log(CardStyles);
const Card = ({ precio, tipo, img }) => {
  return (
    <div className={cardContainer}>
      <img src={img} alt={tipo} />
      <h3>{tipo}</h3>
      <h4>{precio}</h4>
    </div>
  );
};

Card.propTypes={
  precio: PropTypes.string,
  tipo: PropTypes.string,
  img: PropTypes.string
}


export default Card;
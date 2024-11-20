import PropTypes from "prop-types";

export const Card = ({ data }) => {
  console.log(data);

  const { image, name, price } = data;
  return (
    <div>
      <div className="card">
        <img src={image} alt="beer-detail" />
        <p>{name}</p>
        <p>{price}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.string,
  }),
};

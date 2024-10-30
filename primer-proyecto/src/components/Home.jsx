import { pizzas } from "../utils/pizzas";
import Card from "./Card";

const Home = () => {

  return (
    <div className="list-container">
      {pizzas.map((pizza) => {
        return <Card key={pizza.id} {...pizza} />;
      })}
    </div>
  );
};

export default Home;
import { useEffect, useState } from "react";
import { Card } from "./Card";
import { Link } from "react-router-dom";

export const Home = () => {
  const [beers, setBeers] = useState([]);

  const getBeers = async () => {
    const res = await fetch("https://api.sampleapis.com/beers/ale");
    const data = await res.json();
    setBeers(data);
  };

  useEffect(() => {
    getBeers();
  }, []);

  return (
    <div className="grid">
      {beers.map((beer) => (
        <Link key={beer.id} to={`/beer/${beer.id}`}>
          <Card data={beer} />
        </Link>
      ))}
    </div>
  );
};

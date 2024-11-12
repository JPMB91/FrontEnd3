import { useEffect, useState } from "react";

export const Interval = () => {
  const [cantidad, setCantidad] = useState(2);

  // aumenta el valor en 2 cada 1 segundo
  useEffect(() => {
    setInterval(() => {
      setCantidad((prev) => ++prev);
    }, 1000);
  }, []);

  return <div>Quiero {cantidad} chocolates</div>;
};

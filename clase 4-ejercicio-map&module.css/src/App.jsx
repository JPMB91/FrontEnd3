import { Card } from "./components/Card";
import { productos } from "./utils/productos.js";
import {gridContainer} from '../src/styles/App.module.css'

export const App = () => {
  return (
    <>
    <h1>Productos</h1>
    <ul className={gridContainer}>
      {productos.map((producto) => {
        return <Card key={producto.id} {...producto} />;
      })}
    </ul>
    </>
  );
};

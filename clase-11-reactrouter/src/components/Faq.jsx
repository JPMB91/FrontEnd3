import { Link, useParams } from "react-router-dom";
import { preguntas } from "../utils/preguntas.js";

export const Faq = () => {
  const params = useParams();

  const pregunta = preguntas.find(
    (pregunta) => pregunta.id === parseInt(params.id, 10)
  );

  console.log("preguntas array: ", preguntas);
  console.log("pregunta: ", pregunta);
  console.log("params.id: ", params.id);

  return (
    <>
      <h1>FAQ: </h1>

      {!params.id &&
        preguntas.map((pregunta) => (
          <Link key={pregunta.id} to={`${pregunta.id}`}>
            <li>{pregunta.title}</li>
          </Link>
        ))}

      <div>
        <section>
          <h3>{pregunta?.title}</h3>
          <p>{pregunta?.descripcion}</p>
        </section>
      </div>
    </>
  );
};

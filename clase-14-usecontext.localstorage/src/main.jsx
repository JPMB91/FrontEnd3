import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { UserContextProvider } from "./context/userContext.jsx";

createRoot(document.getElementById("root")).render(
//Envolvemos nuestra aplicación en el proveedor para poder luego utilizar el contexto
//en nuestros componentes
  <StrictMode>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </StrictMode>
);

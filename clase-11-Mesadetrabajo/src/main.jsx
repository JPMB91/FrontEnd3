import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Contacto } from "./components/Contacto.jsx";
import { Beer } from "./components/Beer.jsx";
import { Home } from "./components/Home.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/beer/:id" element={<Beer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

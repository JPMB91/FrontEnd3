import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About } from "./components/About.jsx";
import { Faq } from "./components/Faq.jsx";
import { ErrorComponent } from "./components/ErrorComponent.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="about" element={<About />} />
          <Route path='faq' element={<Faq/>}/>
          <Route path="faq/:id" element={<Faq />} />
        </Route>

        <Route path="*" element={<ErrorComponent/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

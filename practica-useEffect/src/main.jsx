import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ChangeTitle } from "./ChangeTitle";
import { Interval } from "./Interval";
import { GetSizeFromWindow } from "./GetSizeFromWindow";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChangeTitle />
    <Interval />
    <GetSizeFromWindow />
  </StrictMode>
);

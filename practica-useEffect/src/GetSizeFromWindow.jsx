import { useEffect } from "react";

export const GetSizeFromWindow = () => {
  useEffect(() => {
    const handleResize = () => {
      console.log("Redimensiona: ", window.innerWidth, "x", window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
  }, []);

  return <div>Resize</div>;
};

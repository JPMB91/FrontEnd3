import Navbar from "./components/Navbar";
import Home from "./components/Home"
import "./styles/App.css";


const titleStyles = {
  backgroundColor: "#ffda92",
  color: "firebrick",
  width: "40%",
  margin: "10px auto",
  borderRadius: "10px",
  padding: "10px",
};

function App() {
  return (
    <div>
      <Navbar />
      <h1 style={titleStyles}>Bienvenidos a proyecto Recetas</h1>
      <Home />
    </div>
  );
}

export default App;
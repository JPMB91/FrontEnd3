import { useEffect } from "react";
import "./App.css";
import { getComments } from "./utils/getComments";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const comments = await getComments();
      setData(comments);
    };

    getData();
  }, []);

  return (
    <>
      <ul>
        {data.map((c) => {
          return (
            <li key={c.id}>
              <h3>post id: {c.postId}</h3>
              <h3>id: {c.id}</h3>
              <h3>name: {c.name}</h3>
              <h3>email: {c.email}</h3>
              <h3>body: {c.body}</h3>
              ____________________________
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;

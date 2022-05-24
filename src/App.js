import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [enPoints, setEndPoints] = useState("");
  const [movies, setMovies] = useState([]);

  const getMovies = () => {
    fetch(`https://1mdb-data-searching.p.rapidapi.com/om?t=+${enPoints}`, {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "1mdb-data-searching.p.rapidapi.com",
        "X-RapidAPI-Key": "bc8006d48amsh69e5064484e98b7p16d73bjsn37edd8bac393"
      }
    })
      .then((response) => {
        console.log(response.json());
      })
      .then((data) => {
        setMovies(data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getMovies();
  }, []);
  function changeHandler(e) {
    e.preventDefault();
    setEndPoints(enPoints);
  }

  return (
    <form className="App">
      <input type="text" value={enPoints} onChange={changeHandler} />
      <button type="submit">Submit</button>
    </form>
  );
}

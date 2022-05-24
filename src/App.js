import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [endPoints, setEndPoints] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, [endPoints]);

  const getMovies = () => {
    fetch(`https://1mdb-data-searching.p.rapidapi.com/om?q=+${endPoints}`, {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "1mdb-data-searching.p.rapidapi.com",
        "X-RapidAPI-Key": "bc8006d48amsh69e5064484e98b7p16d73bjsn37edd8bac393"
      }
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMovies(data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  function changeHandler(e) {
    setEndPoints(e.target.value);
  }
  const submitHandler = (e) => {
    e.preventDefaoult();
  };

  return (
    <div className="app">
      <form onSubmit={submitHandler}>
        <input type="text" value={endPoints} onChange={changeHandler} />
        <button type="submit">Submit</button>
      </form>
      {movies.map((movie, index) => {
        return <div key={index}></div>;
      })}
      ;
    </div>
  );
}

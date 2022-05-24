import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [endPoints, setEndPoints] = useState("");
  const [films, setFilms] = useState([]);
  const [finalpoints, setFinalpoints] = useState("");

  useEffect(() => {
    getMovies(endPoints);
  }, [endPoints]);

  const getMovies = (endPoints) => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "movies-app1.p.rapidapi.com",
        "X-RapidAPI-Key": "bc8006d48amsh69e5064484e98b7p16d73bjsn37edd8bac393"
      }
    };

    fetch(`https://movies-app1.p.rapidapi.com/api/movies${endPoints}`, options)
      .then((response) => response.json())
      .then((response) => console.log(response))
      .then((data) => setFilms(data))
      .then((data) => setFilms(films))
      .catch((err) => console.error(err));
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
      {films.map((film, index) => {
        return (
          <div key={index}>
            <img src={film.image} alt={film.title} />
            <h2>{film.title}</h2>
            <span>{film.year}</span>
          </div>
        );
      })}
    </div>
  );
}

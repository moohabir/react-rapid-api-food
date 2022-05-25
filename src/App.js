import React, { useState, useEffect } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [container, setContainer] = useState([]);
  const [endpoints, setEndpoints] = useState("");

  useEffect(() => {
    getresults();
  }, [endpoints]);

  function getresults() {
    fetch(
      `https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=+${query}`,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Host": "edamam-food-and-grocery-database.p.rapidapi.com",
          "X-RapidAPI-Key": "bc8006d48amsh69e5064484e98b7p16d73bjsn37edd8bac393"
        }
      }
    )
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        setContainer(data.hints);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function submithandler(e) {
    e.preventDefault();
    setEndpoints(query);
  }

  function changeHandler(event) {
    setQuery(event.target.value);
  }
  return (
    <div className="App">
      <form onSubmit={submithandler}>
        <input type="text" value={query} onChange={changeHandler} />
        <button type="submit">Submit</button>
      </form>

      {container.map((item, index) => {
        return (
          <div key={index}>
            <img src={item.food.image} alt="" />
            <p>{item.food.label}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;

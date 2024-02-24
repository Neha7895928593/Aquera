
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PlanetCard from './PlanetCard.js';
import Pagination from './Pagination.js';
import './App.css';

function App() {
  const [planets, setPlanets] = useState([]);
  const [nextPage, setNextPage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://swapi.dev/api/planets/?format=json');
      setPlanets(response.data.results);
      setNextPage(response.data.next);
    };

    fetchData();
  }, []);

  const fetchNextPage = async () => {
    if (nextPage) {
      const response = await axios.get(nextPage);
      setPlanets([...planets, ...response.data.results]);
      setNextPage(response.data.next);
    }
  };

  return (
    <div className="App">
      <h1>Star Wars Planets Directory</h1>
      <div className="planet-container">
        {planets.map(planet => (
          <PlanetCard key={planet.url} planet={planet} />
        ))}
      </div>
      <Pagination fetchNextPage={fetchNextPage} />
    </div>
  );
}

export default App;

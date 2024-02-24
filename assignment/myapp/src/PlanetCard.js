
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PlanetCard = ({ planet }) => {
  const [residents, setResidents] = useState([]);

  useEffect(() => {
    const fetchResidents = async () => {
      const promises = planet.residents.map(residentURL => axios.get(residentURL));
      const residentsData = await Promise.all(promises);
      const residentsInfo = residentsData.map(resident => resident.data);
      setResidents(residentsInfo);
    };

    fetchResidents();
  }, [planet]);

  return (
    <div className="planet-card">
      <h2>{planet.name}</h2>
      <p><strong>Climate:</strong> {planet.climate}</p>
      <p><strong>Population:</strong> {planet.population}</p>
      <p><strong>Terrain:</strong> {planet.terrain}</p>
      <div className="residents-list">
        <h3>Residents:</h3>
        <ul>
          {residents.map(resident => (
            <li key={resident.url}>
              <p><strong>Name:</strong> {resident.name}</p>
              <p><strong>Height:</strong> {resident.height}</p>
              <p><strong>Mass:</strong> {resident.mass}</p>
              <p><strong>Gender:</strong> {resident.gender}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PlanetCard;

import React from 'react';
import Planets from './Planets';

const Planet = ({ planet }) => {
  return (
    <div className="card">
      <p>Population - {planet.population}</p>
      <p>Terrain - {planet.terrain}</p>
    </div>
  )
}

export default Planet;
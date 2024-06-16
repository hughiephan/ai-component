import React from 'react';

// Based on: https://codepen.io/rogermarti64656269/pen/xxzYQYJ

const RentACarForm = () => {
  return (
    <div className="column-2">
      <div className="blanco">
        <h1>Search for a rental car</h1>
        <form action="">
          <label>Pick up location</label>
          <input type="text" placeholder="City, airport, region, district..." />
          <div className="deliver">
            <input type="checkbox" />
            <label>Deliver the car somewhere else</label>
          </div>
          <div className="fechas">
            <div className="fecha">
              <label>Date of pickup</label>
              <input type="date" />
              <input type="time" />
            </div>
            <div className="fecha">
              <label>Date of delivery</label>
              <input type="date" />
              <input type="time" />
            </div>
          </div>
          <div className="conductor">
            <input type="checkbox"/>
            <label>The drivers age between 30 and 65? <i className="fa-solid fa-circle-info"></i></label>
          </div>
          <input type="submit" value="Search" />
        </form>
      </div>
    </div>
  );
};

export default RentACarForm;
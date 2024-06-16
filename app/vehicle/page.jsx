import React from 'react'
import FuelEconomyCalculator from './fuel'
import RentACarForm from './rent'
import { Menu } from "../../components/Menu"
import './fuel.css'
import './rent.css'

const App = () => {
  return (
    <div>
      <main className="flex flex-col items-center justify-center p-24">
        <Menu> </Menu>
      </main>
      <div className="row">
        <FuelEconomyCalculator />
        <RentACarForm />
      </div>
    </div>
  );
};

export default App;
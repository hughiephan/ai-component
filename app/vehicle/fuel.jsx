import React from 'react';

const FuelEconomyCalculator = () => {
  return (
    <div className="column-1">
      <div className="innerWrap calculator">
        <h1>Fuel Economy Calculator</h1>
        <form className="calculator" action="/">
          <div className="vehicleInfo">
            <h3 className="sectionTitle">Listed Vehicle Information</h3>
            <div className="form-wrap">
              <div className="inputTitle">
                <label htmlFor="fuelCapacity" id="fuelCapacity-label">Fuel Capacity (L)</label>
              </div>
              <div className="inputValue">
                <input type="number" id="fuelCapacity" name="fuelCapacity" placeholder="65" required />
              </div>
            </div>
            <div className="form-wrap">
              <div className="inputTitle">
                <label htmlFor="fuelType" id="fuelType-label">Fuel Type</label>
              </div>
              <div className="inputValue">
                <select id="fuelType" name="fuelType" required>
                  <option disabled value>Select a Fuel Type</option>
                  <option value="petrol">Petrol</option>
                  <option value="diesel">Diesel</option>
                </select>
              </div>
            </div>
            <div className="form-wrap">
              <div className="inputTitle">
                <label htmlFor="fuelEconomy" id="fuelEconomy-label">Fuel Economy (MPG)</label>
              </div>
              <div className="inputValue">
                <input type="number" id="fuelEconomy" name="fuelEconomy" placeholder="37.2" step="0.01" required />
              </div>
            </div>
            <div className="form-wrap">
              <div className="inputTitle">
                <label htmlFor="unladenMass" id="unladenMass-label">Unladen Vehicle Mass (kg)</label>
              </div>
              <div className="inputValue">
                <input type="number" id="unladenMass" name="unladenMass" placeholder="1378" required />
              </div>
            </div>
          </div>
          <div className="extraVehicleMass">
            <h3 className="sectionTitle">Extra Vehicle Mass</h3>
            <div className="form-wrap">
              <div className="inputTitle">
                <label htmlFor="passengerNumber" id="passengerNumber-label">No. Passengers (incl. Driver)</label>
              </div>
              <div className="inputValue">
                <input type="number" id="passengerNumber" name="passengerNumber" placeholder="1" min="1" required />
              </div>
            </div>
            <div className="form-wrap">
              <div className="inputTitle">
                <label htmlFor="passengerMass" id="passengerMass-label">Avg. Mass per Passenger (kg)</label>
              </div>
              <div className="inputValue">
                <input type="number" id="passengerMass" name="passengerMass" placeholder="80" required />
              </div>
            </div>
            <div className="form-wrap">
              <div className="inputTitle">
                <label htmlFor="luggageNumber" id="luggageNumber-label">No. Bags of Luggage</label>
              </div>
              <div className="inputValue">
                <input type="number" id="luggageNumber" name="luggageNumber" placeholder="1" required />
              </div>
            </div>
            <div className="form-wrap">
              <div className="inputTitle">
                <label htmlFor="luggageMass" id="luggageMass-label">Avg. Mass per Luggage (kg)</label>
              </div>
              <div className="inputValue">
                <input type="number" id="luggageMass" name="luggageMass" placeholder="10" required />
              </div>
            </div>
          </div>
          <div className="additionalInformation">
            <h3 className="sectionTitle">Additional Information</h3>
            <div className="form-wrap">
              <div className="inputTitle">
                <label htmlFor="drivingOffset" id="drivingOffset-label">Driving Offset (%)</label>
              </div>
              <div className="inputValue">
                <input type="number" id="drivingOffset" name="drivingOffset" placeholder="15" required />
              </div>
            </div>
          </div>
        </form>
        <div className="outputArea">
          <div className="fuelEconomyResult">
            <div className="fuelEconomyTotal">
              <span id="resulttotal-title">Result:</span>
              <span id="resulttotal"></span>
            </div>
            <div className="fuelEconomyChange">
              <span id="resultchange-title">Change:</span>
              <span id="resultchange"></span>
            </div>
          </div>
          <div className="submitValues">
            <input type="button" id="calculatebutton" value="Calculate" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FuelEconomyCalculator;

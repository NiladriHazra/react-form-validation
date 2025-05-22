import React from 'react';
import { countryCityData } from '../data/CountryCity';

const CountryCity = ({ 
  selectedCountry, 
  selectedCity, 
  onChange, 
  countryError, 
  cityError 
}) => {
  const handleCountryChange = (e) => {
    const country = e.target.value;
    onChange(country, ''); 
  };

  const handleCityChange = (e) => {
    const city = e.target.value;
    onChange(selectedCountry, city);
  };

  const availableCities = selectedCountry 
    ? countryCityData.find(item => item.country === selectedCountry)?.cities || []
    : [];

  return (
    <div className="form-row">
      <div className="form-group">
        <label htmlFor="country">
          Country<span className="required">*</span>
        </label>
        <select
          id="country"
          name="country"
          value={selectedCountry}
          onChange={handleCountryChange}
          className={countryError ? 'input-error' : ''}
        >
          <option value="">Select Country</option>
          {countryCityData.map(item => (
            <option key={item.country} value={item.country}>
              {item.country}
            </option>
          ))}
        </select>
        {countryError && <div className="error-message">{countryError}</div>}
      </div>

      <div className="form-group">
        <label htmlFor="city">
          City<span className="required">*</span>
        </label>
        <select
          id="city"
          name="city"
          value={selectedCity}
          onChange={handleCityChange}
          disabled={!selectedCountry}
          className={cityError ? 'input-error' : ''}
        >
          <option value="">Select City</option>
          {availableCities.map(city => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
        {cityError && <div className="error-message">{cityError}</div>}
      </div>
    </div>
  );
};

export default CountryCity;
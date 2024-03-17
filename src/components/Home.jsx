import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountries } from '../Redux/homeSlice';
import position from '../assets/location.png';
import airIndex from '../assets/measure.png'
import './Home.css';

function Home() {
  const dispatch = useDispatch();
  const countriesData = useSelector((state) => state.home.data);

  const [filter, setFilter] = useState('');

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  const filteredCountries = countriesData
    ? countriesData.filter(
      (country) => country.name.toLowerCase().includes(filter.toLowerCase()),
    )
    : [];
  const getAQIDescription = (aqiValue) => {
    const aqiDescriptions = {
      1: 'Good',
      2: 'Fair',
      3: 'Moderate',
      4: 'Poor',
      5: 'Very Poor',
    };
    return aqiDescriptions[aqiValue] || 'Unknown';
  };

  return (
    <div className="homeContainer">
      <div className="principal">
        <h2>Air Quality Index In Tunisia</h2>
        <img src={airIndex} alt="" />
      </div>
      <input
        type="text"
        placeholder="Search by State name"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <div className="gridList">
        {filteredCountries.length > 0 ? (
          filteredCountries.map((country, index) => (
            <div
              key={country.name}
              className={`gridListItem ${index % 4 === 1 || (index - 1) % 4 === 1
                ? 'even'
                : 'odd'
              }`}
            >
              <span>{country.name}</span>
              <div className="position">
                <div>
                <img src={position} alt="" />
                </div>
                <br />
                Latitude :
                {' '}
                {country.lat.toFixed(2)}
                <br />
                Longitude :
                {' '}
                {country.lon.toFixed(2)}
              </div>
              <Link
                to={`/Details?lat=${country.lat}&lon=${country.lon}&countryName=${country.name}`}
              >
                <button type="button">See details</button>
              </Link>
            </div>
          ))
        ) : (
          <p>No matching countries found.</p>
        )}
      </div>
    </div>
  );
}

export default Home;

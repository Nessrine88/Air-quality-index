import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { fetchDetails } from '../Redux/detailsSlice';
import loading from '../assets/loading.gif';
import index from '../assets/index.png'
import './Details.css';

function Details() {
  const dispatch = useDispatch();
  const data1 = useSelector((state) => state.details.data);

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const lat = params.get('lat');
  const lon = params.get('lon');
  const countryName = params.get('countryName');

  useEffect(() => {
    if (lat !== null && lon !== null) {
      dispatch(fetchDetails({ lat, lon }));
    }
  }, [lat, lon, dispatch]);

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
    <div className="container">
      {data1 ? (
        <div>
          <div className="cloud">
         <img src={index} alt="" />
         </div>
          <h2>
            {countryName}
          </h2>
          <h2>
            Air Quality Index =
            {' '}
            {data1.list[0].main.aqi}
          </h2>
          <p className={`aqi-description aqi-${data1.list[0].main.aqi}`}>
            AQI:
            {' '}
            {getAQIDescription(data1.list[0].main.aqi)}
          </p>
          <ul className="componentsList">
            {Object.keys(data1.list[0].components).map((key) => (
              <li key={key}>
                {key}

                :
                {data1.list[0].components[key]}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="loading"><img src={loading} alt="" /></div>
      )}
    </div>
  );
}

export default Details;

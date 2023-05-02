import { useState } from "react";
import useFetch from "../hooks/useFetch";

const PackageSearch = () => {
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");
  const [duration, setDuration] = useState("");
  const [airline, setAirline] = useState("");

  const queryParams = {
    priceMin,
    priceMax,
    duration,
    airline,
  };

  const query = new URLSearchParams(queryParams).toString();
  const url = `http://localhost:4000/api/package/filter?${query}`;

  const { data, loading, error, reFetch } = useFetch(url);

  const handleSearch = (e) => {
    e.preventDefault();
    reFetch();
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <label htmlFor="priceMin">Minimum Price:</label>
        <input
          type="text"
          id="priceMin"
          value={priceMin}
          onChange={(e) => setPriceMin(e.target.value)}
        />

        <label htmlFor="priceMax">Maximum Price:</label>
        <input
          type="text"
          id="priceMax"
          value={priceMax}
          onChange={(e) => setPriceMax(e.target.value)}
        />

        <label htmlFor="duration">Duration:</label>
        <input
          type="text"
          id="duration"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />

        <label htmlFor="airline">Airline:</label>
        <input
          type="text"
          id="airline"
          value={airline}
          onChange={(e) => setAirline(e.target.value)}
        />

        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}

      {error && <p>{error.message}</p>}

      {data.length > 0 ? (
        <ul>
          {data.map((flightReservation) => (
            <li key={flightReservation.id}>
              <p>Price: {flightReservation.price}</p>
              <p>Duration: {flightReservation.duration}</p>
              <p>Package Rating: {flightReservation.package_rating}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No flight reservations matching the given criteria found.</p>
      )}
    </div>
  );
};

export default PackageSearch;

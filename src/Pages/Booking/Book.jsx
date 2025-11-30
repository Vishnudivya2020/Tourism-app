import { useState } from "react";
import React from "react";
import "./Book.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../HomePage/Navbar/nav";

const states = [
  "TamilNadu",
  "Kerala",
  "Delhi",
  "Bangalore",
  "Kashmir",
  "Goa",
  "Meghalaya",
  "AndamanNicobar",
  "Puducherry",
  
];

export const Book = () => {
  const [selectedState, setSelectedState] = useState("");
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  // Handle dropdown select
  const handleSelectChange = (e) => {
    setSelectedState(e.target.value); // just update state, no redirect here
  };

  // Handle search input
  // const handleSearch = (e) => {
  //   setSearchText(e.target.value);
  // };

  // Filter states based on search text
  const filteredStates = states.filter((state) =>
    state.toLowerCase().includes(searchText.toLowerCase())
  );

  // Handle search form submit
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (selectedState) {
      navigate(`/state/${selectedState}`); // redirect only when Go is clicked
    } else {
      alert("Please select a destination first!");
    }
  };

  return (
    <div className="bookContainer">
      <div>
        <Navbar />
      </div>
      <fieldset>
        <legend>
          <button>Book Your Next Getaway in Seconds</button>
        </legend>
        <h3>Discover Your Next Adventure</h3>
      </fieldset>

      <div className="states">
        <h2>Select your favorite destination</h2>
        <form onSubmit={handleSearchSubmit} className="searchForm">
          <select value={selectedState} onChange={handleSelectChange}>
            <option value="" disabled  > ✈️  Where are you going
            </option>
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>

          <button type="submit">Go</button>
        </form>
      </div>
    </div>
  );
};

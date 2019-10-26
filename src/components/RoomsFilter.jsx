import React, { useContext } from "react";
import { Store } from "../Store";
import Title from "./Title";
const uniqueValues = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};
const RoomsFilter = ({ rooms }) => {
  const {
    capacity,
    setCapacity,
    price,
    setPrice,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    setMinSize,
    SetMaxSize,
    type,
    setType,
    pets,
    setPets,
    breakfast,
    setBreakfast,
    filterRooms
  } = useContext(Store);
  let options = uniqueValues(rooms, "type");
  let capacities = uniqueValues(rooms, "capacity");
  let types = ["all", ...options];
  const handleSubmit = e => {
    e.preventDefault();
    filterRooms();
  };
  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={e => setType(e.target.value)}
          >
            {types.map((type, idx) => (
              <option key={idx} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="capacity">guests</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={e => setCapacity(e.target.value)}
          >
            {capacities.map((capacity, idx) => (
              <option key={idx} value={capacity}>
                {capacity}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="price">room price ${price}</label>
          <input
            className="form-control"
            name="price"
            type="range"
            id="price"
            value={price}
            min={minPrice}
            max={maxPrice}
            onChange={e => setPrice(+e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="size">room size</label>
          <input
            type="number"
            name="minSize"
            id="size"
            value={minSize}
            className="input-size"
            onChange={e => setMinSize(+e.target.value)}
          />
          <input
            type="number"
            name="maxSize"
            value={maxSize}
            className="input-size"
            onChange={e => SetMaxSize(+e.target.value)}
          />
        </div>

        <div className="form-control">
          <input
            type="checkbox"
            name="breakfast"
            checked={breakfast}
            id="breakfast"
            onChange={e => {
              setBreakfast(e.target.checked);
            }}
          />
          <label htmlFor="breakfast">breakfast</label>
        </div>

        <div className="form-control">
          <input
            type="checkbox"
            name="pets"
            checked={pets}
            id="pets"
            onChange={e => {
              setPets(e.target.checked);
            }}
          />
          <label htmlFor="pets">pets</label>
        </div>
        <div className="form-control">
          <button
            type="submit"
            style={{
              display: "block",
              backgroundColor: "transparent",
              border: "1px solid #ccc",
              cursor: "pointer",
              color: "#333",
              padding: "5px 10px"
            }}
          >
            submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default RoomsFilter;

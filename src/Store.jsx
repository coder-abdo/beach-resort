import React, { createContext, useState, useEffect } from "react";
import data from "./data";
export const Store = createContext();
const RoomsProvider = ({ children }) => {
  const [rooms, setRooms] = useState([]);
  const [sortedRooms, setSortedRooms] = useState([]);
  const [featuredRooms, setFeauturedRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [type, setType] = useState("all");
  const [capacity, setCapacity] = useState(1);
  const [price, setPrice] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [minSize, setMinSize] = useState(0);
  const [maxSize, setMaxSize] = useState(0);
  const [breakfast, setBreakfast] = useState(false);
  const [pets, setPets] = useState(false);
  const formatData = items => {
    let tempItems = items.map(item => {
      let { id } = item.sys;
      let images = item.fields.images.map(image => image.fields.file.url);
      let room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  };
  const getData = async () => {
    let newRooms = await formatData(data),
      featuringRooms = await newRooms.filter(room => room.featured === true);
    let maxiprice = Math.max(...newRooms.map(room => +room.price)),
      miniprice = Math.min(...newRooms.map(room => +room.price)),
      minisize = Math.min(...newRooms.map(room => room.size)),
      maxisize = Math.max(...newRooms.map(room => room.size));
    setRooms(newRooms);
    setSortedRooms(newRooms);
    setFeauturedRooms(featuringRooms);
    setLoading(false);
    setPrice(maxiprice);
    setMaxPrice(maxiprice);
    setMinPrice(miniprice);
    setMinSize(minisize);
    setMaxSize(maxisize);
  };
  const getRoom = slug => {
    const tempRooms = [...rooms];
    const room = tempRooms.find(room => room.slug === slug);
    return room;
  };
  const filterRooms = () => {
    let temprooms = [...rooms];
    if (type !== "all") {
      temprooms = temprooms.filter(room => room.type === type);
    }
    if (parseInt(capacity) !== 1) {
      temprooms = temprooms.filter(room => room.capacity >= capacity);
    }
    temprooms = temprooms.filter(room => +room.price <= +price);
    temprooms = temprooms.filter(
      room => room.size >= minSize && room.size <= maxSize
    );
    if (breakfast) {
      temprooms = temprooms.filter(room => room.breakfast === true);
    }
    if (pets) {
      temprooms = temprooms.filter(room => room.pets === true);
    }
    setSortedRooms(temprooms);
  };
  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);
  return (
    <Store.Provider
      value={{
        rooms,
        sortedRooms,
        featuredRooms,
        loading,
        getRoom,
        price,
        setPrice,
        minPrice,
        maxPrice,
        maxSize,
        capacity,
        setBreakfast,
        breakfast,
        setCapacity,
        minSize,
        pets,
        setPets,
        type,
        setType,
        filterRooms
      }}
    >
      {children}
    </Store.Provider>
  );
};

export default RoomsProvider;

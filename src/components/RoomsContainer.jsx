import React, { useContext } from "react";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
import Loader from "../components/Loader";
import { Store } from "../Store";
const RoomsContainer = () => {
  const { loading, rooms, sortedRooms } = useContext(Store);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <RoomsFilter rooms={rooms} />
          <RoomsList rooms={sortedRooms} />
        </>
      )}
    </>
  );
};

export default RoomsContainer;

import React, { useContext } from "react";
import { Store } from "../Store";
import Loader from "./Loader";
import Title from "./Title";
import Room from "./Room";
const FeaturedRooms = () => {
  const { featuredRooms: rooms, loading } = useContext(Store);
  return (
    <section className="featured-rooms">
      <Title title="featured rooms" />
      <div className="featured-rooms-center">
        {!loading ? (
          rooms.map(room => <Room key={room.id} room={room} />)
        ) : (
          <Loader />
        )}
      </div>
    </section>
  );
};

export default FeaturedRooms;

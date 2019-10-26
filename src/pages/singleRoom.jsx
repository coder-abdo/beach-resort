import React, { useContext } from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { Store } from "../Store";
import Loader from "../components/Loader";

const SingleRoom = props => {
  const { slug } = props.match.params;
  const { getRoom } = useContext(Store);
  // console.log(getRoom(slug));
  const room = getRoom(slug);
  return (
    <>
      {room ? (
        <>
          <Hero hero="roomsHero">
            <Banner title={`${room.name} room`}>
              <Link to="/rooms" className="btn-primary">
                back to rooms
              </Link>
            </Banner>
          </Hero>
          <section className="single-room">
            <div className="single-room-images">
              {room.images.map((image, idx) => (
                <img key={idx} src={image} alt={image} />
              ))}
            </div>
            <div className="single-room-info">
              <article className="desc">
                <h3>details</h3>
                <p>{room.description}</p>
              </article>
              <articlec className="info">
                <h3>info</h3>
                <h6>price: ${room.price}</h6>
                <h6>size: {room.size} SQFTprice</h6>
                <h6>
                  max of capacity:{" "}
                  {room.capacity > 1
                    ? `${room.capacity} people`
                    : `${room.capacity} person`}
                </h6>
                <h6>{room.pets ? "pets allowed" : "no pets allowed"}</h6>
                <h6>{room.breakfast && "free breakfast included"}</h6>
              </articlec>
            </div>
          </section>
          <section className="room-extras">
            <h6>extras:</h6>
            <ul className="extras">
              {room.extras.map((extra, idx) => (
                <li key={idx}> - {extra}</li>
              ))}
            </ul>
          </section>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default SingleRoom;

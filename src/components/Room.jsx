import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const Room = ({ room }) => {
  const { name, slug, images, price } = room;
  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0]} alt="room" />
        <div className="price-top">
          <h6>${price}</h6>
          <p>per night</p>
        </div>
        <Link className="btn-primary room-link" to={`/rooms/${slug}`}>
          features
        </Link>
      </div>
      <h3 className="room-info">{name}</h3>
    </article>
  );
};
Room.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired
  })
};
export default Room;
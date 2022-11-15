import React from "react";

function Landmark(props) {
  return (
    <div className="landmark">
      <div className="landmark-image-div">
        <img
          className="landmark-image"
          src={require(`../../Images/${props.item.imgUrl}`).default}
          alt="img"
        />
      </div>
      <div className="landmark-info">
        <p className="landmark-location">
          <i className="fa-sharp fa-solid fa-location-dot"></i>
          {`${props.item.address === null ? "" : `${props.item.address}, `}${
            props.item.city
          }, ${props.item.state}${
            props.item.postalCode === null ? "" : `, ${props.item.postalCode}`
          }`}
        </p>
        <a
          href={props.item.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="landmark-maps"
        >
          View on Google Maps
        </a>
        <h1 className="landmark-name">{props.item.landmarkName}</h1>
        <p className="landmark-categoty">{props.item.category}</p>
        <p className="landmark-description">{props.item.description}</p>
      </div>
    </div>
  );
}

export default Landmark;

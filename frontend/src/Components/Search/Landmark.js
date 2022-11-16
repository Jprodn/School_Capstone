import React from "react";
import axios from "axios";

function Landmark(props) {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const fetchHours = async () => {
      const response = await axios.get(
        `http://www.localhost:8081/hours/${props.item.landmarkId}`
      );
      setData(response.data);
    };
    fetchHours();
  }, [props.item.landmarkId]);

  function getDay(day) {
    let dayOfWeek = "";
    switch (day) {
      case 1:
        dayOfWeek = "Sunday";
        break;

      case 2:
        dayOfWeek = "Monday";
        break;

      case 3:
        dayOfWeek = "Tuesday";
        break;

      case 4:
        dayOfWeek = "Wednesday";
        break;

      case 5:
        dayOfWeek = "Thursday";
        break;

      case 6:
        dayOfWeek = "Friday";
        break;

      case 7:
        dayOfWeek = "Saturday";
        break;

      default:
        dayOfWeek = "OPEN";
        break;
    }
    return dayOfWeek;
  }

  const hourElement = data.map((hours) => {
    return (
      <p key={hours.landmarkId} className="hours">
        {getDay(hours.weekday)} {hours.openHour}-{hours.closeHour}
      </p>
    );
  });

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
        {hourElement}
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

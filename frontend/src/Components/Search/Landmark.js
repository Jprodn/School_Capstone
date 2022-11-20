import React from "react";
import axios from "axios";

function Landmark(props) {
  const [data, setData] = React.useState([]);

  const [isClicked, setIsClicked] = React.useState(false);
  function handleClick() {
    setIsClicked((isClicked) => !isClicked);
  }

  const token = JSON.parse(localStorage.getItem("jwtToken"));
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };

  const currentItineraryInfo = JSON.parse(
    localStorage.getItem("currentItinerary")
  );

  React.useEffect(() => {
    console.log("currentItineraryInfo");
    console.log(currentItineraryInfo);
    console.log("props");
    console.log(props);
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

  const hourElement = data.map((hours, i = 0) => {
    return (
      <p key={hours.landmarkId + (i + 1)} className="hours">
        {getDay(hours.weekday)} {hours.openHour}{" "}
        {hours.closeHour === null ? "" : `- ${hours.closeHour}`}
      </p>
    );
  });

  const handleAdd = async (e) =>
    await axios.post(
      `http://localhost:8081/itinerary/addLandmark/${currentItineraryInfo.itineraryId}/${props.item.landmarkId}`,
      config
    );

  function storeData() {
    localStorage.clear();
    localStorage.setItem(
      "address",
      `${props.item.address}, ${props.item.city}, ${props.item.state}, ${props.item.postalCode}`
    );
    console.log(localStorage);
  }

  return (
    <div className="landmark" onClick={handleClick}>
      <h1 className="landmark-name">{props.item.landmarkName}</h1>
      <div className="landmark-image-div">
        <img
          className="landmark-image"
          src={require(`../../Images/${props.item.imgUrl}`).default}
          alt="img"
        />
      </div>
      {isClicked && (
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
          <div className="action">
            <button type="submit" className="action-button" onClick={handleAdd}>
              Add to itinerary
            </button>
          </div>
          <a
            href={props.item.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="landmark-maps"
          >
            View on Google Maps
          </a>

          <a
            href="/map-route"
            target="_blank"
            rel="noopener noreferrer"
            className="map-route"
            onClick={storeData}
          >
            View map
          </a>
          <p className="landmark-categoty">{props.item.category}</p>
          <p className="landmark-description">{props.item.description}</p>
        </div>
      )}
    </div>
  );
}

export default Landmark;

import React from "react";
import axios from "axios";

function Landmark(props) {
    const [data, setData] = React.useState([]);

    const [isClicked, setIsClicked] = React.useState(false);
    function handleClick() {
        setIsClicked((isClicked) => !isClicked);
    }

    const landmarkTheme = "color: dodgerblue; background-color: black";
    const token = JSON.parse(localStorage.getItem("jwtToken"));
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
    };

    const currentItineraryInfo = JSON.parse(
        localStorage.getItem("currentItinerary")
    );

    React.useEffect(() => {
        console.log("%c-----Landmark-----", landmarkTheme);
        console.log(
            "%ccurrentItineraryInfo",
            landmarkTheme,
            currentItineraryInfo
        );
        console.log("%cprops", landmarkTheme, props);
        const fetchHours = async () => {
            const response = await axios.get(
                `http://www.localhost:8081/hours/${props.item.landmarkId}`
            );
            setData(response.data);
        };
        fetchHours();
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
        await axios
            // .post(`http://localhost:8081/itinerary/addLandmark/${currentItineraryInfo.itineraryId}/${props.item.landmarkId}`, config)
            .post(
                `http://localhost:8081/itinerary/addLandmark`,
                {
                    itineraryId: `${currentItineraryInfo.itineraryId}`,
                    landmarkId: `${props.item.landmarkId}`,
                },
                config
            )
            .then(console.log("%cconfig", landmarkTheme, config));

    const handleLikes = async (e) =>
        await axios
            .put(
                `http://localhost:8081/landmark/rating/likes/${e.target.name}`,
                // {
                //   landmarkId: `${props.item.landmarkId}`,
                // },
                config
            )
            .then(
                console.log(
                    "%ce.target-",
                    "color: dodgerblue; background-color: black",
                    e.target.name
                )
            )
            .then(
                console.log(
                    "%cconfig",
                    "color: dodgerblue; background-color: black",
                    config
                )
            );

    const handleDislikes = async (e) => {
        await axios
            .put(
                `http://localhost:8081/landmark/rating/dislikes/${e.target.name}`,
                // {
                //   landmarkId: `${props.item.landmarkId}`,
                // },
                config
            )
            .then(
                console.log(
                    "%cconfig",
                    "color: dodgerblue; background-color: black",
                    config
                )
            );
    };

    function storeData() {
        localStorage.clear();
        localStorage.setItem(
            "address",
            `${props.item.address}, ${props.item.city}, ${props.item.state}, ${props.item.postalCode}`
        );
        console.log("%clocalStorage", landmarkTheme, localStorage);
    }

    return (
        <div className="main-div">
            <div className="contacts">
                <div className="contact-card">
                    <img
                        src={
                            require(`../../Images/${props.item.imgUrl}`).default
                        }
                        alt="landmark-img"
                    />
                    <h3>{props.item.landmarkName}</h3>

                    <div className="info-group">
                        <img
                            src="http://cdn.onlinewebfonts.com/svg/img_413782.png"
                            alt="ico"
                        />
                        <p>{`${
                            props.item.address === null
                                ? ""
                                : `${props.item.address}, `
                        }${props.item.city}, ${props.item.state}${
                            props.item.postalCode === null
                                ? ""
                                : `, ${props.item.postalCode}`
                        }`}</p>
                    </div>

                    <div className="info-group">
                        <img
                            src="https://cdn2.iconfinder.com/data/icons/pittogrammi/142/10-512.png"
                            alt="ico"
                        />
                        <p>
                            <button
                                className="hour-button"
                                onClick={handleClick}
                            >
                                Hours
                            </button>
                        </p>
                    </div>

                    <div className="info-group">
                        {isClicked && (
                            <div className="isClicked">{hourElement}</div>
                        )}
                    </div>

                    <div className="description">{props.item.description}</div>

                    <div className="description-div">
                        <ul className="description-ul">
                            <li>
                                <a
                                    className="description-link"
                                    href={props.item.mapUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View on Google Maps
                                </a>
                            </li>
                            <li>
                                <a
                                    className="description-link"
                                    href="/map-route"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={storeData}
                                >
                                    View map
                                </a>
                            </li>
                        </ul>
                        <button
                        type="submit"
                        className="Add-itinerary-button"
                        onClick={handleAdd}
                        >
                        Add to itinerary
                        </button>
                        <div className="rating">
                            <div className="like grow">
                                <i
                                    className="fa fa-thumbs-up fa-2x like"
                                    aria-hidden="true"
                                    onClick={handleLikes}
                                ></i>
                            </div>
                            <div className="dislike grow">
                                <i
                                    className="fa fa-thumbs-down fa-2x like"
                                    aria-hidden="true"
                                    onClick={handleDislikes}
                                ></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    // <div className="Landmark-card" onClick={handleClick}>

    //   <div>
    //     <img
    //       className="landmark-card-image"
    //       src={require(`../../Images/${props.item.imgUrl}`).default}
    //     />
    //   </div>

    //   <h1 className="Landmark-card-title">{props.item.landmarkName}</h1>

    //   <div className="Landmark-card-body">
    //     <p className="landmark-location">
    //       <i className="fa-sharp fa-solid fa-location-dot"></i>
    //       {`${props.item.address === null ? "" : `${props.item.address}, `}${
    //         props.item.city
    //       }, ${props.item.state}${
    //         props.item.postalCode === null ? "" : `, ${props.item.postalCode}`
    //       }`}
    //     </p>

    //     <div className="action">
    //       <button
    //         type="submit"
    //         className="Add-itinerary-button"
    //         onClick={handleAdd}
    //       >
    //         Add to itinerary
    //       </button>
    //     </div>

    //     <div className="Landmark-map-link">
    //       <a
    //         href={props.item.mapUrl}
    //         target="_blank"
    //         rel="noopener noreferrer"
    //         className="landmark-maps"
    //       >
    //         View on Google Maps
    //       </a>

    //       <a
    //         href="/map-route"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //         className="map-route"
    //         onClick={storeData}
    //       >
    //         View map
    //       </a>
    //     </div>

    //     <p className="landmark-description">{props.item.description}</p>

    //     <label className="hours">Hours</label>
    //     {isClicked && <div className="hours">{hourElement}</div>}
    //   </div>
    // </div>
}

export default Landmark;

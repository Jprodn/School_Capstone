import React from "react";
import axios from "axios";

import { baseUrl } from "../../Shared/baseUrl";

function Landmark(props) {
    const [data, setData] = React.useState([]);

    const [isClicked, setIsClicked] = React.useState(false);
    function handleClick() {
        setIsClicked((isClicked) => !isClicked);
    }

    const [review, setReview] = React.useState(() => ({
      landmarkId: props.item.landmarkId,
      title: "",
      name: "",
      review: "",
  }));

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
                `http://localhost:8081/landmark/rating/likes/${props.item.landmarkId}`,
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
                `http://localhost:8081/landmark/rating/dislikes/${props.item.landmarkId}`,
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

    function handleChange(e) {
      setReview((prevData) => ({
          ...prevData,
          [e.target.name]: e.target.value,
      }));
    }

    async function handleSubmit(event) {
      event.preventDefault();
      await axios
          .post(baseUrl + "/landmark/review/add-review", review, config)
          .catch(function (error) {
              console.log("error");
          });
  }

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
                                className="fa fa-thumbs-up fa-1x like"
                                aria-hidden="true"
                                onClick={handleLikes}
                            ></i>
                        </div>
                        <div className="dislike grow">
                            <i
                                className="fa fa-thumbs-down fa-1x like"
                                aria-hidden="true"
                                onClick={handleDislikes}
                            ></i>
                        </div>
                        {/* <h5>Write your review:</h5>
                        <input className="form-control" placeholder="Title"></input>
                        <input className="form-control" placeholder="Name"></input>
                        <textarea className="form-control" placeholder="Your review here..."></textarea>
                        <button className="btn btn-success">Submit</button> */}
                    </div>
                  <div className="create-card-body">
                    <form className="create-form">
                        <input
                            type="text"
                            className="create-input-form"
                            onChange={handleChange}
                            placeholder="Title"
                            autoComplete="off"
                        />
                        <input
                            type="text"
                            className="create-input-form"
                            onChange={handleChange}
                            name="Name"
                            placeholder="Name"
                        />
                        <textarea
                            type="text"
                            className="create-input-form"
                            onChange={handleChange}
                            placeholder="Your review here..."
                        />
                        <div className="create-form-action">
                            <button type="Reset" className="cancel-button">
                                Clear
                            </button>
                            <button
                                type="Submit"
                                className="ok-button"
                                onClick={handleSubmit}
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landmark;

import React, { useEffect, useState } from "react";
import Popup from "reactjs-popup";
import axios from "axios";
import Create from "../Itinerary/Create";

export default function Home(props) {
    const [isHover, setIsHover] = useState(false);
    const [userInfo, setUserInfo] = useState({
        userId: "",
        itineraries: [],
        itineraryId: "",
        itineraryName: "",
        locationStart: "",
        locationItinerary: "",
        itineraryDate: "",
        data: {},
    });

    const token = JSON.parse(localStorage.getItem("jwtToken"));
    const storageUserId = localStorage.getItem("jwtUserId");
    // console.log(storageUserId);
    // console.log("this is token" + token);
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
    };

    // USE EFFECT
    useEffect(() => {
        const getItinerary = async () => {
            const result = await axios.get(
                `http://localhost:8081/itinerary/getItineraries/user/${storageUserId}`,
                config
            );
            console.log(result);
            setUserInfo((prevInfo) => ({
                ...prevInfo,
                userId: storageUserId,
                itineraries: [...result.data],
                itineraryId: result.data.itineraryId,
                itineraryName: result.data.itineraryName,
                locationStart: "user's location",
                locationItinerary: result.data.startingPoint,
                itineraryDate: result.data.itineraryDate,
                data: result,
            }));
        };
        getItinerary();
    }, []);

    // HANDLES
    const handleInputChange = (event) =>
        setUserInfo((prevInfo) => ({
            ...prevInfo,
            [event.target.name]: event.target.value,
        }));

    // TRIGGERS

    // DISPLAYS
    const displayItineraries = userInfo.itineraries.map((lm, count = 0) => (
        <li className="landmark-list-items" key={count + 1}>
            <button
                // onClick={<Link to={`/edit/${lm.itineraryName}`} />}
                className="create-button border-none"
                styles={"cursor:pointer"}
                title={`Edit ${lm.itineraryName}`}
            >
                <img src="btnEdit.jpeg" alt="edit button" />
            </button>
            <button className="landmark-list-buttons">
                {lm.itineraryName}
            </button>
        </li>
    ));

    const displayLandmarks = userInfo.itineraries.map((lm, count = 0) => (
        <li className="landmark-list-items" key={count + 1}>
            <button className="landmark-list-buttons">
                {lm.itineraryName}
            </button>
        </li>
    ));

    return (
        <div>
            <div className="itinerary-card">
                {/* title */}
                <h1 className="itinerary-card-title">Home</h1>
                {/* image */}
                <div className="itinerary-card-image">
                    <img className="itinerary-image" alt="" src="Map.png" />
                </div>
                {/* edit buttons */}
                <div className="landmark-action-buttons">
                    {/* Popup - CREATE */}
                    <div className="popup-wrapper">
                        <Popup
                            className="popup-content"
                            trigger={
                                <button
                                    className="create-button border-none"
                                    styles={"cursor:pointer"}
                                    title="Create"
                                >
                                    <img
                                        src="btnCreate.png"
                                        alt="create button"
                                    />
                                </button>
                            }
                            position="right center"
                            // closeOnDocumentClick
                        >
                            <Create />
                        </Popup>
                    </div>
                    {/* button - ROUTE */}
                    <button
                        className="create-button border-none"
                        styles={"cursor:pointer"}
                        title="Route"
                    >
                        <img src="btnMap.png" alt="generate route button" />
                    </button>
                </div>
                <div className="itinerary-card-body">
                    {/* location list */}
                    <ul className="landmark-list">
                        <li className="landmark-list-items">
                            <button
                                className="startPoint-button"
                                onMouseOver={() => setIsHover(() => true)}
                                onMouseOut={() => setIsHover(() => false)}
                            >
                                {userInfo.locationStart}
                                {isHover && <span>edit</span>}
                            </button>
                        </li>
                        {displayItineraries}
                    </ul>
                    {/* save / delete */}
                    <div className="landmark-action-buttons">
                        <div className="save">
                            {/* <button className="save-button" type="submit" onClick={handleSubmit}>Save</button> */}
                        </div>
                        <div className="Delete Itinerary">
                            <button className="delete-button">
                                Delete Itinerary
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

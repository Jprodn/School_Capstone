import React, { useEffect, useState } from "react";
import axios from "axios";
import { isDraftable } from "immer";

export default function Itinerary(props) {
    const [userInfo, setUserInfo] = useState({
        userId: "",
        itineraries: [],
        itineraryId: "",
        itineraryName: "",
        startingPoint: "",
        itineraryDate: "",
        data: {},
    });

    const [userLandmarks, setUserLandmarks] = useState([]);
    const [locationChange, setLocationChange] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const token = JSON.parse(localStorage.getItem("jwtToken"));
    const storageUserId = localStorage.getItem("jwtUserId");
    const currentItineraryInfo = JSON.parse(
        localStorage.getItem("currentItinerary")
    );
    console.log(storageUserId);
    console.log("this is token" + token);
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
    };

    useEffect(() => {
        console.log("currentItineraryInfo");
        console.log(currentItineraryInfo);
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
                startingPoint: result.data.startingPoint,
                itineraryDate: result.data.itineraryDate,
                data: result,
            }));
        };
        getItinerary();
    }, []);

    useEffect(() => {
        console.log("userInfo.startingPoint");
        console.log(userInfo.startingPoint);
        const getUserLandmarks = async () => {
            const result = await axios.get(
                `http://localhost:8081/itinerary/getLandmarks/user/${storageUserId}/${currentItineraryInfo.itineraryId}`,
                config
            );

            console.log(
                "getUserLandMarks: " + currentItineraryInfo.itineraryId
            );
            console.log("result -" + JSON.stringify(result.data));
            setUserLandmarks(() => result.data);
        };
        getUserLandmarks();
    }, []);

    const deleteItinerary = async () => {
        const response = await axios.delete(
            `http://www.localhost:8081/itinerary/deleteItinerary/${currentItineraryInfo.itineraryId}`,
            config
        );
        console.log("deleteItinerary response" + response);
        window.location.replace("/home");
    };

    const deleteLandmark = async (e) => {
        await axios.delete(
            `http://www.localhost:8081/itinerary/removeLandmark/${currentItineraryInfo.itineraryId}/${e.target.name}`,
            config
        );
        window.location.reload();
    };

    const displayLandmarks = userLandmarks.map((lm, count = 0) => (
        <li className="landmark-list-items" key={count + 1}>
            <button className="landmark-list-buttons modify-button-set align-center">
                {lm.landmarkName}
                <img
                    className="trash-button"
                    src="btnDelete.png"
                    name={lm.landmarkId}
                    onClick={deleteLandmark}
                ></img>
            </button>
        </li>
    ));

    const handleLocationChange = (e) => {
        setUserInfo((prevInfo) => ({
            ...prevInfo,
            startingPoint: e.target.value,
        }));
        console.log(userInfo.startingPoint);
    };

    const isBeingEdit = () => {
        setIsEditing((p) => !p);
    };

    const goToSearch = () => window.location.replace("/landmark");

    return (
        <div>
            <div className="itinerary-card">
                <h1 className="itinerary-card-title">
                    {currentItineraryInfo.itineraryName}
                </h1>
                <div className="itinerary-card-image">
                    <img
                        className="itinerary-image"
                        alt=""
                        src="https://www.google.com/maps/about/images/mymaps/mymaps-desktop-16x9.png"
                    />
                </div>
                <div className="itinerary-card-body">
                    <ul className="landmark-list">
                        <li className="landmark-list-items">
                            <button className="startPoint-button">
                                {isEditing ? (
                                    <input
                                        name="startingPoint"
                                        onChange={handleLocationChange}
                                        onClick={isBeingEdit}
                                        value={
                                            currentItineraryInfo.startingPoint
                                        }
                                    />
                                ) : (
                                    <p>{currentItineraryInfo.startingPoint}</p>
                                )}
                            </button>
                        </li>
                        {displayLandmarks}
                    </ul>
                    <div className="landmark-action-buttons">
                        <div className="save">
                            {/* <button className="save-button" type="submit" onClick={handleSubmit}>Save</button> */}
                        </div>
                        <div className="Delete Itinerary">
                            <button
                                className="delete-button"
                                onClick={deleteItinerary}
                            >
                                Delete Itinerary
                            </button>
                        </div>
                        <div className="Search Itinerary">
                            <button
                                className="search-button"
                                onClick={goToSearch}
                            >
                                Search Landmarks
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

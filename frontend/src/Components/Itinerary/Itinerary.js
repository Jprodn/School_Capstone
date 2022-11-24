import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Itinerary(props) {
    const [userInfo, setUserInfo] = useState({
        userId: "",
        itineraries: [],
        itineraryId: "",
        itineraryName: "",
        startingPoint: null,
        itineraryDate: "",
        data: {},
    });
    const itineraryTheme = "color: orange; background-color: black";

    const [userLandmarks, setUserLandmarks] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const token = JSON.parse(localStorage.getItem("jwtToken"));
    const storageUserId = localStorage.getItem("jwtUserId");
    const currentItineraryInfo = JSON.parse(
        localStorage.getItem("currentItinerary")
    );
    console.log("%cstorageUserId", itineraryTheme, storageUserId);
    console.log("%cToken", itineraryTheme, token);
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
    };

    useEffect(() => {
        console.log("%c-----Itinerary-----", itineraryTheme);
        console.log(
            "%ccurrentItineraryInfo",
            itineraryTheme,
            currentItineraryInfo
        );
        let isMounted = true;
        const getItinerary = async () => {
            const result = await axios.get(
                `http://localhost:8081/itinerary/getItineraries/user/${storageUserId}`,
                config
            );
            console.log("%cgetItinerary: result", itineraryTheme, result);
            if (isMounted) {
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
            }
        };
        getItinerary();
        return () => {
            isMounted = false;
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        console.log(
            "%cuserInfo.startingPoint",
            itineraryTheme,
            userInfo.startingPoint
        );
        let isMounted = true;
        const getUserLandmarks = async () => {
            const result = await axios.get(
                `http://localhost:8081/itinerary/getLandmarks/user/${storageUserId}/${currentItineraryInfo.itineraryId}`,
                config
            );

            console.log(
                "getUserLandMarks: " + currentItineraryInfo.itineraryId
            );
            console.log(
                "%cgetUserLandmarks: result",
                itineraryTheme,
                result.data
            );
            if (isMounted) {
                setUserLandmarks(() => result.data);
            }
        };
        getUserLandmarks();
        return () => {
            isMounted = false;
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const deleteItinerary = async () => {
        const response = await axios.delete(
            `http://www.localhost:8081/itinerary/deleteItinerary/${currentItineraryInfo.itineraryId}`,
            config
        );
        console.log("%cdeleteItinerary response", itineraryTheme, response);
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
                    alt=""
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
        console.log(
            "%cuserInfo.startingPoint",
            itineraryTheme,
            userInfo.startingPoint
        );
    };

    const isBeingEdit = () => {
        setIsEditing((p) => !p);
    };

    const goToSearch = () => window.location.replace("/landmark");

    const removeLocationFocus = async (e) => {
        if (e.keyCode === 13) {
            setIsEditing(false);
            setUserInfo((p) => ({
                ...p,
                startingPoint: [e.startingPoint, e.target.value],
            }));
            await axios(
                `http://localHost:8081/itinerary/updateStart/${userInfo.startingPoint}`,
                config
            );
        }
    };

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
                            <button
                                className="startPoint-button"
                                onDoubleClick={isBeingEdit}
                            >
                                {isEditing ? (
                                    <input
                                        name="startingPoint"
                                        onChange={handleLocationChange}
                                        value={userInfo.startingPoint || ""}
                                        autoFocus
                                        onKeyUp={removeLocationFocus}
                                    />
                                ) : (
                                    <span>{userInfo.startingPoint}</span>
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

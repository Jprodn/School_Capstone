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
    const itineraryURL = "http://localhost:8081/itinerary";
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
    const config2 = {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "text/plain",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "PUT",
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
        let startPoint = '';
        
        const itineraryStartingPoint = async () => {
            startPoint = await axios.get(
                `${itineraryURL}/getStart/${currentItineraryInfo.itineraryId}`,
                config
            )
            console.log("%cStartPoint:", itineraryTheme, startPoint);
            if (isMounted) {
                setUserInfo((prevInfo) => ({
                    ...prevInfo,
                    startingPoint: startPoint.data,
                }));
            }
        };
        const getItinerary = async () => {
            const result = await axios.get(
                `${itineraryURL}/getItineraries/user/${storageUserId}`,
                config
            );

            console.log("%cgetItinerary: result", itineraryTheme, result);
            if (isMounted) {
                setUserInfo((prevInfo) => ({
                    ...prevInfo,
                    userId: storageUserId,
                    itineraries: [...result.data],
                }));
            }
        };
        itineraryStartingPoint();
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
                `${itineraryURL}/getLandmarks/user/${storageUserId}/${currentItineraryInfo.itineraryId}`,
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
            `${itineraryURL}/deleteItinerary/${currentItineraryInfo.itineraryId}`,
            config
        );
        console.log("%cdeleteItinerary response", itineraryTheme, response);
        window.location.replace("/home");
    };

    const deleteLandmark = async (e) => {
        await axios.delete(
            `${itineraryURL}/removeLandmark/${currentItineraryInfo.itineraryId}/${e.target.name}`,
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
        if (e.keyCode === 13 && isEditing) {
            setUserInfo((p) => ({
                ...p,
                startingPoint: e.target.value,
            }));
            const data = userInfo.startingPoint;
            await axios.put(
                `${itineraryURL}/updateStart/${currentItineraryInfo.itineraryId}`,
                data,
                config2
            );
            setIsEditing(false);
        }
    };

    const updateStartingLocation = async () => {
        setIsEditing(false);
        const data = userInfo.startingPoint;
        await axios.put(
            `${itineraryURL}/updateStart/${currentItineraryInfo.itineraryId}`,
            data,
            config2
        );
    };

    return (
        <div className="card">
            <div className="itinerary-card">
                <h1 className="itinerary-card-title">
                    {currentItineraryInfo.itineraryName}
                </h1>
                <div className="itinerary-card-image">
                    <img
                        className="itinerary-image"
                        alt=""
                        src="mapping.jpg"
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
                                        onBlur={updateStartingLocation}
                                    />
                                ) : (
                                    <>
                                        <span>{userInfo.startingPoint}</span>
                                    </>
                                )}
                            </button>
                        </li>
                        {displayLandmarks}
                    </ul>
                    <div className="landmark-action-buttons">
                        <div className="save">
                            {/* <button className="save-button" type="submit" onClick={handleSubmit}>Save</button> */}
                        </div>
                            <button
                                className="delete-button"
                                href="/map-route"
                                target="_blank"
                                rel="noopener noreferrer"
                                // onClick={goToSearch}
                            >
                                Generate Travel Route
                            </button>
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

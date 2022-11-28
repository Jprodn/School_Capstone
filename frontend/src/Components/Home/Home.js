import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Home(props) {
    const [userInfo, setUserInfo] = useState({
        userId: "",
        itineraries: [],
        itineraryId: "",
        itineraryName: "",
        startingPoint: "",
        itineraryDate: "",
        data: {},
    });

    const homeTheme = "color: magenta; background-color: black";
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
        console.log("%c-----Home-----", homeTheme);
        let isMounted = true;
        const getItinerary = async () => {
            const result = await axios.get(
                `http://localhost:8081/itinerary/getItineraries/user/${storageUserId}`,
                config
            );
            console.log("%cgetItinerary: result", homeTheme, result);
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
        return () => { isMounted = false };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function goToItinerary(lm) {
        if (!token) {
            window.location.replace(`/login`);
        } else {
            window.localStorage.setItem(`currentItinerary`, JSON.stringify(lm));
            window.location.replace(`/itinerary`);
        }
    }

    // DISPLAYS
    const displayItineraries = userInfo.itineraries.map((lm, count = 0) => (
        <li className="landmark-list-items" key={count + 1}>
            <button
                className="landmark-list-buttons"
                id={lm.itineraryId}
                onClick={() => goToItinerary(lm)}
            >
                {lm.itineraryName}
            </button>
        </li>
    ));

    const goToCreate = () => {
        if (!token) {
            window.location.replace(`/login`);
        } else {
            window.location.replace("/itinerary/create");
        }
    }

    // JSX
    return (
        <div className="main-itinerary-div">
            <div className="itinerary-card">
                {/* title */}
                <h1 className="itinerary-card-title"></h1>
                {/* image */}
                <div className="itinerary-card-image">
                    <img className="itinerary-image" alt="" src="travel.jpg" />
                </div>
                <div className="itinerary-card-body">
                    {/* location list */}

                   
         
                    <ul className="landmark-list">
                        
                      {displayItineraries}

                    </ul> 


                    {/* save / delete */}
                    <div className="landmark-action-buttons">
                        <div className="save">
                            {/* <button className="save-button" type="submit" onClick={handleSubmit}>Save</button> */}
                        </div>
                    </div>
                    {/* edit buttons */}
                    <div className="landmark-action-buttons">
                        {/* Popup - CREATE */}
                        <button
                            className="delete-button"
                            onClick={goToCreate}
                        >
                            Create Itinerary
                            </button>
                        {/* <div className="popup-wrapper">
                        <ControlledPopup />
                    </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

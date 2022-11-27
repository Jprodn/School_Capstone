import React from "react";
import axios from "axios";

import { baseUrl } from "../../Shared/baseUrl";

export default function Create(props) {
    const [itineraryData, setItineraryData] = React.useState(() => ({
        itineraryName: "",
        startingPoint: "",
        itineraryDate: "",
    }));

    const createTheme = "color: pink; background-color: black";
    
    let token = window.localStorage.getItem("jwtToken");

    function handleChange(e) {
        setItineraryData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    }

    async function handleSubmit(event) {
        event.preventDefault();
        console.log("%chandleSubmit: baseUrl", createTheme, baseUrl);
        const data = itineraryData;
        console.log("%cdata: itineraryData", createTheme, data);

        const token = JSON.parse(localStorage.getItem("jwtToken"));
        console.log("%cToken", createTheme, token);
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        };

        await axios
            .post(baseUrl + "/itinerary/createItinerary", data, config)
            .catch(function (error) {
                console.log("%cerror", createTheme, error);
            });
    }

    if (!token) {
        const timeout = setTimeout(() => {
          window.location.replace('http://localhost:3000');
        }, 2000);
      
    return (
        <>
            <h1>Unauthorized User... Please log in.</h1>
        </>
    )
}
    return (
        <div>
            <div className="create-card">
                <div>
                    <img
                        className="create-card-image"
                        alt="map"
                        src="https://cdn.pixabay.com/photo/2018/08/01/21/26/map-3578213__480.jpg"
                    />
                </div>

                <h1 className="create-card-title">Create Itinerary</h1>

                <div className="create-card-body">
                    <form className="create-form">
                        <input
                            type="text"
                            className="create-input-form"
                            onChange={handleChange}
                            name="itineraryName"
                            placeholder="Itinerary Name"
                            autoComplete="off"
                        />
                        <input
                            type="text"
                            className="create-input-form"
                            onChange={handleChange}
                            name="startingPoint"
                            placeholder="Starting Point"
                        />
                        <input
                            type="Date"
                            className="create-input-form"
                            onChange={handleChange}
                            name="itineraryDate"
                            placeholder="Date"
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
                                OK
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

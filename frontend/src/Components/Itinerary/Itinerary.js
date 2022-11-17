import React, { useEffect, useState } from "react"
import axios from 'axios'



export default function Itinerary(props) {
    const [userInfo, setUserInfo] = useState({
        userId: "",
        itineraries: [],
        itineraryId: "",
        itineraryName: "",
        locationStart: "",
        locationItinerary: "",
        itineraryDate: "",
        data: {}
    })
    
    const token = JSON.parse(localStorage.getItem('jwtToken'));
    const storageUserId = localStorage.getItem('jwtUserId');
    console.log(storageUserId);
    console.log("this is token" + token);
    const config = {
        headers:
        {
            "Authorization": `Bearer ${token}`,
            "Content-Type": 'application/json'
        }
        
    }
    
    useEffect(() => {    
        const getItinerary = async () => {
            const result = await axios.get(`http://localhost:8081/itinerary/getItineraries/user/${storageUserId}`, config)
            console.log(result);
            setUserInfo(prevInfo => ({
                ...prevInfo,
                userId: storageUserId,
                itineraries: [...result.data],
                itineraryId: result.data.itineraryId,
                itineraryName: result.data.itineraryName,
                locationStart: "user's location",
                locationItinerary: result.data.startingPoint,
                itineraryDate: result.data.itineraryDate,
                data: result
            }))
        };
        getItinerary();
    }, [])

    const displayItineraries = (
        userInfo.itineraries.map((lm, count = 0) => (
            <li className="landmark-list-items" key={count + 1}>
                <button className="landmark-list-buttons" >{lm.itineraryName}</button>
            </li>
        ))
    )

    return (
        <div>
            <div className="itinerary-card">
                <h1 className="itinerary-card-title">Edit Itinerary</h1>
                <div className="itinerary-card-image">
                    <img className="itinerary-image" alt="" src="https://www.google.com/maps/about/images/mymaps/mymaps-desktop-16x9.png" />
                </div>
                <div className="itinerary-card-body">
                    <ul className="landmark-list">
                        <li className="landmark-list-items">
                            <button className="startPoint-button">{userInfo.locationStart}</button></li>
                            {displayItineraries}
                    </ul>
                    <div className="landmark-action-buttons">
                        <div className="save">
                            {/* <button className="save-button" type="submit" onClick={handleSubmit}>Save</button> */}
                        </div>
                        <div className="Delete Itinerary">
                            <button className="delete-button" >Delete Itinerary</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
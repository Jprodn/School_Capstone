import React, { useEffect, useState } from "react"

import axios from 'axios'

import { baseUrl } from '../../Shared/baseUrl'



export default function Itinerary(props) {
    const [userId, setUserId] = useState ("");
    const [name, setName] = useState ("");
    const [start, setStart] = useState ("");
    const [landmark, setLandmark] = useState ([]);
    const [data, setData] = useState ("");

    const [itinerary, setItinerary] = useState({
        id: "",
        name: "",
        start: "",
        landmark: [],
        data: ""
    })
    
    const token = localStorage.getItem('jwtToken');
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
            // const result = await axios.get(`http://localhost:8081/itinerary/${storageUserId}`, config)
            const result = await axios.get(`http://localhost:8081/itinerary/4`)
            setData(result.data)
        };

        getItinerary();
    }, [])

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
                            <button className="startPoint-button">Starting</button></li>
                        <li className="landmark-list-items"><button className="landmark-list-buttons">landmark1</button></li>
                        <li className="landmark-list-items"><button className="landmark-list-buttons">landmark2</button></li>
                            <li className="landmark-list-items"><button className="landmark-list-buttons">landmark3</button></li>
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
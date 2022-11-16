import React, { useEffect, useState } from "react"

import axios from 'axios'

// import { baseUrl } from '../../Shared/baseUrl'


export default function Itinerary(props) {
    // const [itinerary, setItinerary] = useState({
    //     id: "",
    //     name: "",
    //     start: "",
    //     landmark: ""
    // })

    // const loadItinerary = async () => {
    //     const result = await axios.get(`http://localhost:8081/itinerary/` + itinerary.id)

    //     setItinerary(result.data);
    //   };

    //   const onInputChange = (e) => {
    //     setItinerary({ ...itinerary, [e.target.name]: e.target.value });
    //   };

    //   const onSubmit = async (e) => {
    //     e.preventDefault();
    //     await axios.put(`http://localhost:8081/itinerary/${id}`, itinerary);
        
    //   };
    // function handleSubmit() {
    //     console.log("handle submit")
    //     axios.post(baseUrl + "/itinerary", data)
    // }

    // const setItineraryIdObj = () => setItinerary(prev => ({...prev, id: window.localStorage.getItem('jwtBlob').data.user.id}))
    // const getItineraryId = () => itinerary.id;


    // useEffect(() => {
    //     setItineraryIdObj();
    //     console.log("get IID:")
    //     console.log(getItineraryId);
    //     // axios.get(baseUrl + "/")
    // }, [])


    return (
        <div>
            {/* Itinerary Component Test
            <h1 className="itinerary-name">Edit Itinerary 1</h1> */}
            {/* map */}
            {/* <ul className="landmark-list">
                <li>Starting Point</li>
                <li>landmark1</li>
                <li>landmark2</li>
                <li>landmark3</li>
            </ul>
            <div className="save">
                <button type="submit" className="save-button" onClick={handleSubmit}>Save</button>
            </div>
            <div className="Delete Itinerary">
                <button className="delete-button" >Delete Itinerary</button>
            </div> */}


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
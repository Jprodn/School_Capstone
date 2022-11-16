import React from 'react'

import axios from 'axios'

import { baseUrl } from '../../Shared/baseUrl'


export default function Create(props) {
    const [itineraryData, setItineraryData] = React.useState(() => ({
        itineraryName: "",
        startingPoint: "",
        itineraryDate: ""
    }));

    function handleChange(e) {
        setItineraryData(prevData => ({
            ...prevData,
            [e.target.name]: e.target.value
        }))
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(baseUrl)
        console.log("handle submit")
        const data = itineraryData;
        console.log(data)

        const token = JSON.parse(localStorage.getItem('jwtToken'));
        console.log("this is token" + token)
        const config = {
            headers:
            {
                "Authorization": `Bearer ${token}`,
                "Content-Type": 'application/json'
            }
        }


        axios.post(baseUrl + "/itinerary/create", data, config)
            .then(function () {
                console.log("axios")
            })
            .catch(function (error) {
                console.log(error)
            })
    }


    return (
        <div>
            
            <div className="create-card">

                <div  >
                    <img className="create-card-image" alt="map" src="https://cdn.pixabay.com/photo/2018/08/01/21/26/map-3578213__480.jpg" />
                </div>
                <h1 className="create-card-title">Create Itinerary</h1>


                <div className="create-card-body">

                    <form className="create-form">
                        <input type="text" className="create-input-form" onChange={handleChange} name="itineraryName" placeholder="Itinerary Name" />
                        <input type="text" className="create-input-form" onChange={handleChange} name="startingPoint" placeholder="Starting Point" />
                        <input type="Date" className="create-input-form" onChange={handleChange} name="itineraryDate" placeholder="Date" />
                        <div className="create-form-action">
                            <button type="Reset" className="cancel-button">Cancel</button>
                            <button type="Submit" className="ok-button" onClick={handleSubmit}>OK</button>
                        </div>

                    </form>


                </div>


            </div>
        </div>
    )
}
import React from 'react'
import axios from 'axios'
import { baseUrl } from '../../Shared/baseUrl'

export default function Create(props) {
 
    const [itineraryData, setItineraryData] = React.useState({
        itineraryName: "",
        startingPoint: "",
        date: ""
    });
    
    function handleChange(e) {
        setItineraryData(prevData => ({
            ...prevData,
            [e.target.name]: e.target.value
        }))
    }

    function handleSubmit() {
        const data = itineraryData;
        axios.post(baseUrl + "/itinerary/create", data)
    }

    return (
        <div>
            Create Component Test
            <h1 className="title">Create Itinerary</h1>
            <form>
                <input type="text" onChange={handleChange} name="itineraryName" placeholder="Itinerary Name" />
                <input type="text" onChange={handleChange} name="startingPoint" placeholder="Starting Point" />
                <input type="Date" onChange={handleChange} name="date" placeholder="Date" />
                <button type="Reset">Cancel</button>
                <button type="Submit" onClick={handleSubmit}>OK</button>
            </form>
        </div>
    )
}
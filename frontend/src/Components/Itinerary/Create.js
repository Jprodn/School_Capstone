import React from 'react'
import axios from 'axios'
import { baseUrl } from '../../Shared/baseUrl'
import { Token } from '../../Redux/token';


export default function Create(props) {
    const [itineraryData, setItineraryData] = React.useState(() => ({
        itineraryName: "",
        startingPoint: "",
        itineraryDate: ""
    }));

    // const state = Token.getState();
    // const authToken = state.currentUser.token;

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

        const token = localStorage.getItem('jwtToken');
        const headers = {
          Authorization: `Bearer ${token}`
        }

        // console.log("this is Token " + Token);
        console.log("this is Token.Token " + Token.Token)

        axios.post(baseUrl + "/itinerary/create", data, headers)
        .then(function(){
            console.log("axios")
        })
        .catch(function(error) {
            console.log(error)
        })
    }


    return (
        <div>
            Create Component Test
            <h1 className="title">Create Itinerary</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} name="itineraryName" placeholder="Itinerary Name" />
                <input type="text" onChange={handleChange} name="startingPoint" placeholder="Starting Point" />
                <input type="Date" onChange={handleChange} name="itineraryDate" placeholder="Date" />
                <button type="Reset">Cancel</button>
                <button type="submit">OK</button>
            </form>
        </div>
    )
}
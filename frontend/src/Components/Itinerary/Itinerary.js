import React from "react";
import axios from 'axios'
import { baseUrl } from '../../Shared/baseUrl'

export default function Itinerary(props) {

    const data = props;
    console.log("stringify-props:\n\n" + JSON.stringify(data))
    // const getItineraryTitle = data.map(name => <>{name}</>)

    function handleSubmit() {
        axios.post(baseUrl + "/itinerary", data)
    }

    return (
        <div>
            Itinerary Component Test
            <h1 className="itinerary-name">Edit Itinerary 1</h1>
            {/* map */}
            <ul className="landmark-list">
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
            </div>
        </div>
    )
}
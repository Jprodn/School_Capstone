import React from 'react'

export default function Create(props) {
    return (
        <div>
            Create Component Test
            <h1 className="title">Create Itinerary</h1>
            <form>
                <input type="text" placeholder="Itinerary Name" />
                <input type="text" placeholder="Starting Point" />
                <input type="Date" placeholder="Date" />
                <button type="Reset">Cancel</button>
                <button type="Submit">OK</button>
            </form>
        </div>
    )
}
import React from "react";
import Popup from "reactjs-popup";
import Create from "../Itinerary/Create";

export default class ControlledPopup extends React.Component {
    constructor() {
        super();
        this.state = {
            isOpen: false,
        }; // state to control the state of popup
    }

    handleOpen = () => {
        this.setState({ isOpen: true });
    };

    handleClose = () => {
        this.setState({ isOpen: false });
    };

    render() {
        return (
            <div>
                <Popup
                    className="popup-content popup-overlay"
                    trigger={
                        <button
                            className="create-button border-none"
                            styles={"cursor:pointer"}
                            title="Create"
                        >
                            <img src="btnCreate.png" alt="create button" />
                        </button>
                    }
                    position="right center"
                    closeOnDocumentClick
                ><Create /></Popup>
            </div>
        );
    }
}


    /* <div className="popup-wrapper">
    <Popup
        className="popup-content popup-overlay"
        trigger={
            <button
                className="create-button border-none"
                styles={"cursor:pointer"}
                title="Create"
            >
                <img src="btnCreate.png" alt="create button" />
            </button>
        }
        position="right center"
        closeOnDocumentClick
    >
        <Create />
    </Popup>
</div>; */
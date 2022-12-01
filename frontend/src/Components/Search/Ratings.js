import React from "react";

const Ratings = (props) => {
    return (
        <>
            <div className="like grow">
                <i
                    className="fa fa-thumbs-up fa-1x like"
                    aria-hidden="true"
                    onClick={props.handleLikes}
                ></i>
                {props.likes.likeCounts}
            </div>
            <div className="dislike grow">
                <i
                    className="fa fa-thumbs-down fa-1x dislike"
                    aria-hidden="true"
                    onClick={props.handleDislikes}
                ></i>
                {props.likes.dislikeCounts}
            </div>
        </>
    );
};

export default Ratings;

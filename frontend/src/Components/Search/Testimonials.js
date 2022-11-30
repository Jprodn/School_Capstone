import React from "react";

const Testimonials = (props) => {
    const title = props.rev.title;
    const name = props.rev.name;
    const comment = props.rev.review;

    return (
        <>
            <hr style={{ height: "3px" }} />
            <div className="review">
                <h4 className="comment-title">{title}</h4>
                <h4 className="comment-name">{name}</h4>
                <p className="comment-review">{comment}</p>
            </div>
        </>
    );
};

export default Testimonials;

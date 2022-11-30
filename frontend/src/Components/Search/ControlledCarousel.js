import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function ControlledCarousel(props) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const reviews = props.review.map((r, i) => {
        return (
                <Carousel.Item key={i} className="comment-review">
                    {r.review}
                        <h3 className="comment-title">{r.title}</h3>
                        <p className="comment-name">{r.name}</p>
                </Carousel.Item>
        );
    });

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            {reviews}
        </Carousel>
    );
}

export default ControlledCarousel;

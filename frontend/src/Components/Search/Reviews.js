import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import Testimonials from "./Testimonials";
import { baseUrl } from "../../Shared/baseUrl";
import { config } from "../../Shared/config";

const Reviews = (props) => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        axios
            .get(
                `${baseUrl}/landmark/review/get-reviews/${props.review.landmarkId}`,
                config
            )
            .then((r) => setTestimonials(r.data));
    }, []);

    const showTestimonials = testimonials.map((t, i) => {
        return <Testimonials rev={t} key={i} />;
    });

    return (
        <div className="section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title">
                            <h4>Reviews</h4>

                            <div className="section-borders">
                                <span></span>
                                <span className="black-border"></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="owl-carousel client-testimonial-carousel">
                            {showTestimonials}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;

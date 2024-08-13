import React, { useState, useEffect } from "react";
import ReviewsDisplay from './ReviewsDisplay';

function Reviews() {
    const [name, setName] = useState("");
    const [reviewText, setReviewText] = useState("");
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
    const storedReviews = JSON.parse(localStorage.getItem("reviews"));
    if (storedReviews) {
        setReviews(storedReviews);
    }
    }, []);

    const submitReview = () => {
    const review = {
        name,
        review: reviewText,
    };

    setReviews([...reviews, review]);
    localStorage.setItem("reviews", JSON.stringify([...reviews, review]));

    setName("");
    setReviewText("");
    };

    return (
    <div>
        <div className="flex rounded-full bg-primary/20 px-1.5 py-0.5 text-xs tracking-wider text-purple-700 light:bg-white/10 light:text-orange-300">
        <h1>Submit a Review</h1>

        <input
            type="text"
            id="name"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
        />

        <textarea
            id="review"
            placeholder="Write your review here"
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
        />

        <button onClick={submitReview}
        >
            Submit
        </button>
        </div>
    </div>
    );
}

export default Reviews;

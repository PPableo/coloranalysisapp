"use client";
import React, { useState, useEffect } from "react";

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

    const displayReviews = () => {
    return reviews.map((review) => (
        <div key={review.name} className="review">
        <h2>{review.name}</h2>
        <p>{review.review}</p>
        </div>
    ));
    };

    return (
    <body>
        <div
        className="flex rounded-full bg-primary/20 px-1.5 py-0.5 text-xs tracking-wider text-purple-700 light:bg-white/10 light:text-orange-300" //"text-2xl font-bold text-gray-900 light:text-white" //"absolute z-10 w-full border-b border-black/5 light:border-white/5 lg:border-transparent"
        //using this line to figure out the styles from the main page
              // style={{
        //   border: "5px solid black",
        //   margin: 5,
        //   padding: 5,
        //   borderRadius: 4,
        //   backgroundColor: "white",
        // }}
        >
        <h1>Submit a Review</h1>
        <input
            type="text"
            id="name"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
            color: "black",
            border: "5px solid green",
            margin: 5,
            padding: 5,
            borderRadius: 4,
            backgroundColor: "white",
            }}
        />
        <textarea
            id="review"
            placeholder="Write your review here"
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            style={{
            color: "black",
            border: "5px solid green",
            margin: 5,
            padding: 5,
            borderRadius: 4,
            backgroundColor: "white",
            }}
        />
        <button
            onClick={submitReview}
            style={{
            border: "5px solid green",
            margin: 5,
            padding: 5,
            borderRadius: 4,
            backgroundColor: "white",
            color: "black",
            }}
        >
            Submit
        </button>

        <div
            className="reviews"
            style={{
            border: "5px solid green",
            margin: 5,
            padding: 5,
            borderRadius: 4,
            backgroundColor: "white",
            color: "black",
            }}
        >
            <h1>Reviews</h1>
            <div
            className="storedReviews"
            style={{
                border: "5px solid green",
                margin: 5,
                padding: 5,
                borderRadius: 4,
                backgroundColor: "white",
                color: "black",
            }}
            >
            {displayReviews()}
            </div>
        </div>
        </div>
    </body>
    );
}

export default Reviews;

import React, { useState } from "react";
import Container from "./Container";

function ReviewForm({ onReviewSubmit }) {
  const [name, setName] = useState("");
  const [reviewText, setReviewText] = useState("");

  const handleSubmit = () => {
    const review = {
      name,
      reviewText,
    };
    
    if (typeof onReviewSubmit === 'function') {
      onReviewSubmit(review);
      setName("");
      setReviewText("");
    } else {
      console.error("onReviewSubmit is not a function");
    }
  };

  return (
    <Container>
      <div className="flex flex-col items-center justify-center py-8 space-y-6 border-y border-gray-200 dark:border-gray-800">
        <h1 className="text-3xl text-gray-700 dark:text-gray-300 font-bold text-center mb-8">Submit a Review</h1>
        <div className="w-full max-w-md space-y-4">
          <input
            className="w-full px-4 py-2 text-center border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            type="text"
            id="name"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            className="w-full px-4 py-2 text-center border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            id="review"
            placeholder="Write your review here"
            rows="4"
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
          />
        </div>
        <button
          className="px-6 py-2 text-white bg-primary rounded-full hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition duration-300"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </Container>
  );
}

export default ReviewForm;
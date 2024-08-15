import React, { useState } from "react";
import Container from "./Container";

function ReviewForm({ onReviewSubmit }) {
  const [name, setName] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formErrors = {};
    if (!name.trim()) {
      formErrors.name = "Name is required";
    }
    if (!reviewText.trim()) {
      formErrors.reviewText = "Review text is required";
    }
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      const review = {
        name: name.trim(),
        reviewText: reviewText.trim(),
      };
      
      if (typeof onReviewSubmit === 'function') {
        try {
          onReviewSubmit(review);
          setName("");
          setReviewText("");
          setErrors({});
        } catch (error) {
          console.error("Error submitting review:", error);
          setErrors({ submit: "Failed to submit review. Please try again." });
        }
      } else {
        console.error("onReviewSubmit is not a function");
        setErrors({ submit: "Unable to submit review. Please try again later." });
      }
    }
  };

  return (
    <Container>
      <div className="flex flex-col items-center justify-center py-8 space-y-6 border-y border-gray-200 dark:border-gray-800">
        <h1 className="text-3xl text-gray-700 dark:text-gray-300 font-bold text-center mb-8">Submit a Review</h1>
        <div className="w-full max-w-md space-y-4">
          <div>
            <input
              className={`w-full px-4 py-2 text-center border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
                errors.name ? 'border-red-500' : ''
              }`}
              type="text"
              id="name"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>
          <div>
            <textarea
              className={`w-full px-4 py-2 text-center border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
                errors.reviewText ? 'border-red-500' : ''
              }`}
              id="review"
              placeholder="Write your review here"
              rows="4"
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
            />
            {errors.reviewText && <p className="text-red-500 text-sm mt-1">{errors.reviewText}</p>}
          </div>
        </div>
        <button
          className="px-6 py-2 text-white bg-primary rounded-full hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition duration-300"
          onClick={handleSubmit}
        >
          Submit
        </button>
        {errors.submit && <p className="text-red-500 text-sm mt-2">{errors.submit}</p>}
      </div>
    </Container>
  );
}

export default ReviewForm;
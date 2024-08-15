import React from "react";
import Container from "./Container";

const ReviewsDisplay = ({ reviews }) => {
  return (
    <Container>
      <div className="reviews-container py-12">
        {" "}
        {/* Add flex-col for column layout */}
        <h1 className="text-4xl text-gray-700 light:text-gray-300 text-bold text-center mb-8">
          Reviews
        </h1>
        {reviews.length > 0 ? (
          <ul className="reviews-list ">
            {reviews.map((review, index) => (
              <li key={index} className="review">
                <br></br>
                <h2>{review.name}</h2>
                <p>{review.review}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="list-inside list-disc space-y-4 text-center">
            No reviews yet.
          </p>
        )}
      </div>
    </Container>
  );
};

export default ReviewsDisplay;

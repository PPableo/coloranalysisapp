import React from 'react';

function ReviewsDisplay({ reviews }) {
  return (
    <div className="reviews">
      <h1>Reviews</h1>
      <div className="storedReviews">
        {Array.isArray(reviews) && reviews.length > 0 ? (
          reviews.map((review) => (
            <div key={review.name} className="review">
              <h2>{review.name}</h2>
              <p>{review.review}</p>
            </div>
          ))
        ) : (
          <p>No reviews yet.</p>
        )}
      </div>
    </div>
  );
}

export default ReviewsDisplay;
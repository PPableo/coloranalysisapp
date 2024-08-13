import React from 'react';

const ReviewsDisplay = ({ reviews }) => {
    return (
    <div className="reviews-container mx-auto max-w-7xl flex flex-col items-center">  {/* Add flex-col for column layout */}
        <h1 className="text-2xl font-bold text-center">Reviews</h1>
        {reviews.length > 0 ? (
        <ul className="reviews-list">
            {reviews.map((review, index) => (
                <li key={index} className="review">
                    <br></br>
                <h2>{review.name}</h2>
                <p>{review.review}</p>
            </li>
                ))}
        </ul>
        ) : (
        <p>No reviews yet.</p>
        )}
    </div>
    );
};

export default ReviewsDisplay;
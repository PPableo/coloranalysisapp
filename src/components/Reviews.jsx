import React, { useState, useEffect } from 'react';
import ReviewsDisplay from './ReviewsDisplay';

function Reviews() {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
    const storedReviews = JSON.parse(localStorage.getItem('reviews'));
    if (storedReviews) {
        setReviews(storedReviews);
    }
    }, []);

    const handleReviewSubmit = (review) => {
    setReviews([...reviews, review]);
    localStorage.setItem('reviews', JSON.stringify([...reviews, review]));
    };

    return (
    <div id='reviews'>
        <ReviewsDisplay reviews={reviews} />
    </div>
    );
}

export default Reviews;

import React, { useState } from 'react';

function ReviewForm({ onReviewSubmit }) {
  const [name, setName] = useState('');
  const [reviewText, setReviewText] = useState('');

  const handleSubmit = () => {
    const review = {
      name,
      reviewText,
    };
    onReviewSubmit(review);
    setName('');
    setReviewText('');
    };

    return (
    <div className="flex rounded-full bg-primary/20 px-1.5 py-0.5 text-xs tracking-wider text-purple-700 light:bg-white/10 light:text-orange-300">
        <h1>Submit a Review</h1>
        <div>
        <div className="flex rounded-full bg-primary/20 px-1.5 py-0.5 text-xs tracking-wider text-purple-700 light:bg-white/10 light:text-orange-300">

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
            </div>
    </div>
        <button onClick={handleSubmit}>Submit</button>
    </div>
    );
}

export default ReviewForm;
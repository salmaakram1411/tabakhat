import React, { useState } from 'react';

const ReviewForm = () => {
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(0); // Rating can be from 1 to 5, 0 means no rating given

  const handleReviewTextChange = (e) => {
    setReviewText(e.target.value);
  };

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle submitting the review and rating
    console.log(`Review: ${reviewText}, Rating: ${rating}`);
    // Reset the form after submission
    setReviewText('');
    setRating(0);
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="review" style={{ display: 'block', marginBottom: '5px', fontSize: '17px' ,fontWeight:'600'}}>Your Review:</label>
        <textarea
          id="review"
          value={reviewText}
          onChange={handleReviewTextChange}
          required
          style={{ width: '100%', padding: '10px', fontSize: '13px', border: '1px solid #ccc', borderRadius: '3px' }}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="rating" style={{ display: 'block', marginBottom: '5px', fontSize: '17px', fontWeight:'600'  }}>Rating:</label>
        <div style={{ fontSize: '28px' }}>
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              style={{ cursor: 'pointer', color: star <= rating ? '#FFD700' : '#ccc' }}
              onClick={() => handleRatingChange(star)}
            >
              &#9733;
            </span>
          ))}
        </div>
      </div>
      <button
        type="submit"
        style={{ width: '100%', padding: '10px', fontSize: '16px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer' , backgroundColor:'#e01e38bc'}}
      >
        Submit Review
      </button>
    </form>
  );
};

export default ReviewForm;



import React, { useState } from "react";
import "./Review.css";
import Navbar from "../HomePage/Navbar/nav";

const Review = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !message || rating === 0) {
      alert("Please fill all fields and select rating!");
      return;
    }

    const newReview = {
      name,
      message,
      rating,
      date: new Date().toLocaleDateString(),
    };

    setReviews([newReview, ...reviews]);
    setName("");
    setMessage("");
    setRating(0);
  };

  return (
    <div className="review-container">
        <div>
            <Navbar/>
        </div>
      <h1 className="review-header">Customer Reviews</h1>

      {/* Review Form */}
      <form className="review-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          className="input-box"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <textarea
          placeholder="Write your review..."
          className="textarea-box"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        {/* Star Rating */}
        <div className="star-rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={star <= rating ? "star filled" : "star"}
              onClick={() => setRating(star)}
            >
              ★
            </span>
          ))}
        </div>

        <button className="submit-btn">Submit Review</button>
      </form>

      {/* Show All Reviews */}
      <div className="review-list">
        {reviews.length === 0 ? (
          <p className="no-review">No reviews yet. Be the first!</p>
        ) : (
          reviews.map((rev, index) => (
            <div key={index} className="review-card">
              <div className="review-top">
                <h3>{rev.name}</h3>
                <p className="stars">
                  {"★".repeat(rev.rating)}
                  {"☆".repeat(5 - rev.rating)}
                </p>
              </div>
              <p className="review-message">{rev.message}</p>
              <p className="review-date">{rev.date}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Review;

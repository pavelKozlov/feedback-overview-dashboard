import React from 'react';
import './feedbackListItemRating.scss';

const FeedbackListItemRating = ({ value }) => (
  <div className="rating-list-item">
    <span>{value}</span>
  </div>
);

export { FeedbackListItemRating };

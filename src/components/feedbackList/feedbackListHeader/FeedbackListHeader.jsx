import React from 'react';
import './feedbackListHeader.scss';
import '../feedbackListItem/feedbackListItem.scss';

const FeedbackListHeader = () => (
  <div className="feedback-list-header feedback-list-row">
    <div className="feedback-list-row__column feedback-list-row__column-rating">
      Rating
    </div>
    <div className="feedback-list-row__column feedback-list-row__column-comment">
      Comment
    </div>
    <div className="feedback-list-row__column feedback-list-row__column-browser">
      Browser
    </div>
    <div className="feedback-list-row__column feedback-list-row__column-device-type">
      Device
    </div>
    <div className="feedback-list-row__column feedback-list-row__column-platform">
      Platform
    </div>
  </div>
);

export { FeedbackListHeader };

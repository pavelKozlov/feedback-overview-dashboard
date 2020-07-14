import React from 'react';
import { getDeviceType } from '../../../utils/userAgentUtils.js';
import { FeedbackListItemRating } from '../feedbackListItemRating/index.js';
import './feedbackListItem.scss';

const FeedbackListItem = ({ rating, comment, userAgent, computedBrowser }) => {
  return (
    <li className="feedback-list-row">
      <div className="feedback-list-row__column feedback-list-row__column-rating">
        <FeedbackListItemRating value={rating} />
      </div>
      <div className="feedback-list-row__column feedback-list-row__column-comment">
        {comment}
      </div>
      <div className="feedback-list-row__column feedback-list-row__column-browser">
        <span>{computedBrowser.Browser}</span>
        <span>{computedBrowser.Version}</span>
      </div>
      <div className="feedback-list-row__column feedback-list-row__column-device-type">
        {getDeviceType(userAgent)}
      </div>
      <div className="feedback-list-row__column feedback-list-row__column-platform">
        {computedBrowser.Platform}
      </div>
    </li>
  );
};

export { FeedbackListItem };

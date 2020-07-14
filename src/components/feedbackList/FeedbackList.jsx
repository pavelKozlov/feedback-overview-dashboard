import React from 'react';
import { FeedbackListItem } from './feedbackListItem';
import './feedbackList.scss';

const FeedbackList = ({ items }) => (
  <div>
    <ul className="feedback-list">
      {items.map((item) => (
        <FeedbackListItem
          {...{
            key: item.id,
            rating: item.rating,
            comment: item.comment,
            userAgent: item.browser.userAgent,
            computedBrowser: item.computed_browser,
          }}
        />
      ))}
    </ul>
  </div>
);

export { FeedbackList };

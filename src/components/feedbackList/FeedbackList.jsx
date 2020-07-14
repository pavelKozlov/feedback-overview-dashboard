import React from 'react';
import { FeedbackListItem } from './feedbackListItem';
import './feedbackList.scss';
import { FeedbackListHeader } from './feedbackListHeader/FeedbackListHeader.jsx';

const FeedbackList = ({ items }) => (
  <div>
    <FeedbackListHeader />
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

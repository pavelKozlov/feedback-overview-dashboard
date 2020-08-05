import React from 'react';
import { useSelector } from 'react-redux';
import { FeedbackListItem } from './feedbackListItem';
import './feedbackList.scss';
import { FeedbackListHeader } from './feedbackListHeader/FeedbackListHeader.jsx';

const FeedbackList = () => {
  const items = useSelector((state) => state.data.items);

  return (
    <div className="feedback-list">
      <FeedbackListHeader />
      <div className="feedback-list__list-container">
        <ul className="feedback-list__list">
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
    </div>
  );
};

export { FeedbackList };

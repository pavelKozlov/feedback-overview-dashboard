import React from 'react';
import { FeedbackListRow } from './feedbackListRow';

const FeedbackList = ({ items }) => {
  console.log({ items });

  return (
    <div>
      <ul>
        {items.map((item) => (
          <FeedbackListRow
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
};

export { FeedbackList };

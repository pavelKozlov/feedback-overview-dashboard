import React from 'react';
import { getDeviceType } from '../../../utils/userAgentUtils.js';

const FeedbackListRow = ({ rating, comment, userAgent, computedBrowser }) => {
  return (
    <li>
      <div>{rating}</div>
      <div>{comment}</div>
      <div>
        <span>{computedBrowser.Browser}</span>
        <span>{computedBrowser.Version}</span>
      </div>
      <div>{getDeviceType(userAgent)}</div>
      <div>{computedBrowser.platform}</div>
    </li>
  );
};

export { FeedbackListRow };

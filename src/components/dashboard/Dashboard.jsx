import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FeedbackList } from '../feedbackList/index.js';
import './dashboard.scss';

import { fetchData } from '../../state/data/data.actions.js';

const Dashboard = () => {
  const dispatch = useDispatch();
  const feedbackItems = useSelector((state) => state.data.items);

  useEffect(() => {
    // componentDidMount
    dispatch(fetchData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="dashboard">
      <FeedbackList items={feedbackItems} />
    </div>
  );
};

export { Dashboard };

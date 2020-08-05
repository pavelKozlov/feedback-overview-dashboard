import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FeedbackList } from '../feedbackList/index.js';
import './dashboard.scss';

import { fetchData } from '../../state/data/data.actions.js';
import { FilterInput } from '../filterInput/index.js';

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // componentDidMount
    dispatch(fetchData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="dashboard">
      <FilterInput placeholder="Search here!" />
      <FeedbackList />
    </div>
  );
};

export { Dashboard };

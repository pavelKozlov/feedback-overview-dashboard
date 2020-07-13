import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './dashboard.scss';

import { fetchData } from '../../state/data/data.actions.js';

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // componentDidMount
    dispatch(fetchData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div>Hello world</div>;
};

export { Dashboard };

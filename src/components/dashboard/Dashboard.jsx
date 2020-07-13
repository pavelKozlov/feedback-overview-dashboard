import React, { useEffect } from 'react';
import './dashboard.scss';

import { fetchData } from '../../state/data/data.actions.js';

const Dashboard = () => {
  useEffect(() => {
    // componentDidMount
    fetchData();
  }, []);
  return <div>Hello world</div>;
};

export { Dashboard };

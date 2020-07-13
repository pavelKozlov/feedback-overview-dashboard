import React, { useEffect } from 'react';
import './dashboard.scss';

import { fetchItems } from '../../services/feedbackService.js';

const Dashboard = () => {
  useEffect(() => {
    // componentDidMount
    fetchItems().then((data) => console.log({ data }));
  }, []);
  return <div>Hello world</div>;
};

export { Dashboard };

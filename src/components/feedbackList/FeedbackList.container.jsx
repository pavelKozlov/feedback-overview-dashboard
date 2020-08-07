import { useSelector } from 'react-redux';
import { FeedbackList } from './FeedbackList.jsx';

const FeedbackListContainer = () => {
  const items = useSelector((state) => state.data.items);

  return FeedbackList({ items });
};

export { FeedbackListContainer };

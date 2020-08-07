import axios from 'axios';
import { API_ENDPOINT } from '../constants/appConstants.js';

const instance = axios.create({
  baseURL: API_ENDPOINT,
});

/**
 * Fetches the feedback items.
 *
 * @returns {Promise<T>}
 */
const fetchItems = () =>
  instance.get('example/apidemo.json').then((response) => response.data);

export const feedbackService = { fetchItems };

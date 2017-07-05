import { Actions } from 'react-native-router-flux';
import {
  FETCH_NEWS_LISTS
} from './types';

export const fetchNewsLists = () => {
  return {
    type: FETCH_NEWS_LISTS,
    payload: 'asdf'
  };
};
